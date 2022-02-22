import React, { useState } from 'react';
import { useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Navbar from './Components/Navbar'
import Users from './Components/ShowUsers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';
import Logout from './Components/Logout';
import PrivateRoute from './utils/PrivateRoute.js'
import PublicRoute from './utils/PublicRoute.js';
import { getToken, removeUserSession, setUserSession } from './utils/Common';
import axios from 'axios';



function App() {

  const [authLoading, setAuthLoading] = useState(true);

 

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios.get(`http://localhost:4000/verifyToken?token=${token}`)
    .then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    })
    
  }, []);

  if(authLoading && getToken()) {
    return <div className='content'>Checking Authentication</div>
  }

  return (
    <>
    <BrowserRouter>
      <Navbar/> 
     
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/users" component={Users} />
      <PrivateRoute exact path="/dashboard" component={Dashboard } />
      <PrivateRoute exact path="/logout" component={Logout} />
     <PrivateRoute exact path="/edit/:id" component={EditUser}/>
   
      <PrivateRoute exact component={NotFound} />
      </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
