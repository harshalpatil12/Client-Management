import React from 'react'
import { getUser, removeUserSession } from '../utils/Common';
import { FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: { 
    marginRight: "80",
    marginTop: "50",
    paddingLeft: "500" 
    }
})

const Logout = (props) => {
    const classes = useStyles(); 
    const user = getUser();
    const handleLogout = () =>{
        removeUserSession();
        props.history.push('/login');
    }
    return (
        <div>
            <FormControl className={classes.container}>
            <h1>Are You Sure ! </h1>
            <input style={{ backgroundColor: "blue", color: "white"}}type="button" value="Logout" onClick={handleLogout}/>
            </FormControl>
        
        </div>
    )
}

export default Logout
  