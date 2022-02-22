import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import { useEffect, useState } from 'react'
import { deleteUser, getusers } from '../Service/api'
import { Link } from 'react-router-dom';

const useStyle =makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#ffffff',
            fontsize: 20
        }
    },
    row: {
        '& > *': {
            fontSize: 20
        }
    }
})
const ShowUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
       getAllUsers();
    }, [])

    const getAllUsers = async() => {
        let response = await getusers();
     
        setUsers(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }
    return (
               
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Pass</TableCell>
                    {/* <TableCell>Department</TableCell> */}
                   
                    <TableCell>Location</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TableRow className = {classes.row} key={user.id}>
                         {/* <TableCell>{user.id}</TableCell> */}
                            <TableCell>{user.name}</TableCell>
                             <TableCell>{user.reason}</TableCell>
                             <TableCell>{user.type}</TableCell>
                             <TableCell>{user.division}</TableCell>
                             <TableCell>{user.category}</TableCell>
                             <TableCell>{user.priority}</TableCell>
                             <TableCell>{user.department}</TableCell>
                            
                             <TableCell>{user.location}</TableCell>
                             <TableCell>
                                 {/* <Button variant='contained' color= "primary" style={{marginRight: 10, width: "10", height: "10"}} component={Link} to={`/edit/${user.id}`}>Start</Button>
                                 <Button variant='contained' style={{marginRight: 10, width: "10", height: "10"}} onClick={() => deleteUserData(user.id)}>Close</Button>
                                 <Button variant='contained' style={{width: "1", height: "1"}} onClick={() => deleteUserData(user.id)}>Cancel</Button> */}
                             </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
      
    )
}

export default ShowUsers;
