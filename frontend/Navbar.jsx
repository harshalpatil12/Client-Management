import  {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header:{
        background:'#111111'
    },
    tabs: {
        color: "#ffffff",
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})
const Navbar = () => {
    const classes = useStyle();
    return (
    <AppBar className={classes.header} position="static">
        <Toolbar>
            
       
            {/* <NavLink className={classes.tabs} to="./" exact>Login</NavLink> */}
            <NavLink className={classes.tabs} to="Logout" exact>Logout</NavLink>
            <NavLink className={classes.tabs} to="users" exact>Dashboard</NavLink>
            <NavLink className={classes.tabs} to="dashboard" exact>Add-Users</NavLink>  
            
          

        </Toolbar>
    </AppBar>
    )
}
export default Navbar;