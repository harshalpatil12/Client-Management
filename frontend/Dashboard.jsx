import React from 'react';
import { useState } from 'react';
import { dashboard } from '../Service/api';
import { Select, MenuItem, makeStyles, FormControl, InputLabel, TextField, Button, FormGroup} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        
    },
    mybox:{
        width: 300,
        padding: 80,
        backgroundColor: 'grey',
        borderRadius: 6,
        marginTop: 50,
        marginLeft: 500,
        marginRight: 100,
        
        
    }
    
})
  
const initialValues = {
    name: '',
    reason: '',
    type: '',
    division: '',
    category: '',
    priority: '',
    department: '',
  
    location: ''
}

const Dashboard = () => {
    const [ user, setUser ] = useState(initialValues);
    const { name, reason, type, division, category, priority, department, location } = user;
    let history = useHistory();
    const classes = useStyles();

    const onValueChange = (e) =>{
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value});
        console.log(user);
        
    }

    const addUserDetails = async () => {
        await dashboard(user);
        History.push('./all');
    }

    return (
    <FormGroup className={classes.container}>
      <FormControl>
         
          
      <h1 style={{marginLeft: 600, marginBottom: 1, marginTop: 30}}>Add User</h1>
            <FormControl className={classes.mybox} style={{marginTop: 10}}>
            <h3 style={{marginBottom: 10}}>First Name</h3>
              <textarea placeholder="jack" onChange={(e) => onValueChange(e)} name='name' value={name}></textarea>
          
              
              <h3 style={{marginBottom: 10}}>Last Name</h3>
              <textarea placeholder="gates" onChange={(e) => onValueChange(e)} name='reason' value={reason}></textarea>
          {/* <Select>
              <MenuItem value={10}>IT</MenuItem>
              <MenuItem value={20}>Company</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>Dealership</MenuItem>
              <MenuItem value={50}>Transfort</MenuItem>
          </Select> */}
           
        
          <h3 style={{marginBottom: 10}}>Email</h3>
           <textarea placeholder='abc@gmail.com' onChange={(e) => onValueChange(e)} name='type' value={type}></textarea>
          {/* <Select>
              <MenuItem value={11}>Internal</MenuItem>
              <MenuItem value={12}>External</MenuItem>
              <MenuItem value={13}>Vender</MenuItem>
          </Select> */}
        
        <h3 style={{marginBottom: 10}}>Phone</h3>
          <textarea placeholder='+91..' onChange={(e) => onValueChange(e)} name='division' value={division}></textarea>
          {/* <Select>
              <MenuItem value={35}>Compressor</MenuItem>
              <MenuItem value={36}>Pump</MenuItem>
              <MenuItem value={37}>Filter</MenuItem>
              <MenuItem value={38}>Glass</MenuItem>
              <MenuItem value={39}>Water hitter</MenuItem>
          </Select> */}
            
            <h3 style={{marginBottom: 10}}>Addres</h3>
          <textarea placeholder='At-post...' onChange={(e) => onValueChange(e)} name='category' value={category}></textarea>
         {/* <Select>
              <MenuItem value={10}>Quality A</MenuItem>
              <MenuItem value={101}>Quality B</MenuItem>
              <MenuItem value={102}>Quality C</MenuItem>
          </Select> */}

<h3 style={{marginBottom: 10}}>Pass</h3>
          <textarea placeholder='pass' onChange={(e) => onValueChange(e)} name='priority' value={priority}></textarea>
          {/* <Select>
              <MenuItem value={21}>High</MenuItem>
              <MenuItem value={22}>Medium</MenuItem>
              <MenuItem value={23}>Low</MenuItem>
          </Select> */}

{/* <h3 style={{marginBottom: 10}}>Department</h3>
          <textarea placeholder='finance' onChange={(e) => onValueChange(e)} name='department' value={department}></textarea> */}
          {/* <Select>
              <MenuItem value={24}>Strategy</MenuItem>
              <MenuItem value={25}>Finance</MenuItem>
              <MenuItem value={26}>Quality</MenuItem>
              <MenuItem value={27}>Maintenance</MenuItem>
              <MenuItem value={28}>Store</MenuItem>
              
                  

          </Select> */}



          <h3 style={{marginBottom: 10}}>Location</h3>
          
          <textarea placeholder='Pune' onChange={(e) => onValueChange(e)} name='location' value={location}></textarea>
          {/* <Select>
              <MenuItem value={17}>Pune</MenuItem>
              <MenuItem value={18}>Mumbai</MenuItem>
              <MenuItem value={19}>Banglore</MenuIt
              em>
          </Select> */}


        
        <Button variant='contained' onClick={() => addUserDetails()} color="primary" style={{marginTop: 30}}>Submit</Button>
        
          
        
          </FormControl>
          </FormControl>
        </FormGroup>
    )
}

export default Dashboard;
