import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { setUserSession } from '../utils/Common';
import { FormControl, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        position: 'absolute',
        marginTop: 20,
        paddingLeft: 400,
        paddingTop: 50,
        backgroundColor: 'rgba(250,2,10,0.4)',
        top: 50,
        bottom: 50,
        left: 250,
        right: 260,
        
    }
    // mybox:{
    //     width: 300,
    //     padding: 80,
    //     backgroundColor: 'grey',
    //     borderRadius: 6,
    //     marginTop: 50,
    //     marginLeft: 500,
    //     marginRight: 100
        
        
    // }
    
})
  


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post("http://localhost:4000/users/signin", {
            username: username,
            password: password
        }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user)
            props.history.push('/dashboard');
        }).catch(error => {
            setLoading(false);            
            if(error.response.status === 401 || error.response.status === 400){
                setError(error.response.data.message);
            }
            else{
                setError("something went wrong plz try again");
            }
            console.error('error >>>', error);
        });
       
    }
    return (
       
        
        <FormControl className = {classes.container}>
        <div><br/>
            <h1>Login</h1>
        <div>
            <h2>Username</h2>
            <input placeholder = "Email" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
            <h2>Password</h2>
            <input placeholder= "pass" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div><br />
        {error && <div className="error">{error}</div>}
        <input style={{backgroundColor: "lightblue"}} type="button" value={loading ? "Loading.." : "Login"} disabled={loading} onClick={handleLogin}/>
        </div>
        </FormControl>
    )
}

export default Login
