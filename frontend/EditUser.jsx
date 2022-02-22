import React from 'react';
import { useState, useEffect } from 'react';
import { dashboard } from '../Service/api';
import { Select, MenuItem, makeStyles, FormControl, InputLabel, TextField, Button, FormGroup} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getusers, editUser } from '../Service/api';

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
        marginRight: 100
        
        
    }
    
})
  
const initialValues = {
    reason: '',
    type: '',
    division: '',
    category: '',
    priority: '',
    department: '',
   
    location: ''
}

const EditUser = () => {
    const [ user, setUser ] = useState(initialValues);
    const { reason, type, division, category, priority, department, location } = user;
    const { id } = useParams();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        loadUserData();
        
    }, []);

    const loadUserData = async() => {
        const response = await getusers(id);
        setUser(response.data);
        
    }

    const onValueChange = (e) =>{
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value});
        console.log(user);
        
    }

    const editUserDetails = async () => {
        await EditUser(id, user);
        history.push('./all');
    }

    return (
    
    <FormGroup className={classes.container}>
      <FormControl>
          
          
          
            <FormControl className={classes.mybox} >
           
              <h3 style={{marginBottom: 10}}>Reason</h3>
              <textarea placeholder='IT'  onChange={(e) => onValueChange(e)} name='reason' value={reason}></textarea>
          {/* <Select>
              <MenuItem value={10}>IT</MenuItem>
              <MenuItem value={20}>Company</MenuItem>
              <MenuItem value={30}>Business</MenuItem>
              <MenuItem value={40}>Dealership</MenuItem>
              <MenuItem value={50}>Transfort</MenuItem>
          </Select> */}
           
        
          <h3 style={{marginBottom: 10}}>Type</h3>
           <textarea placeholder='Vender' onChange={(e) => onValueChange(e)} name='type' value={type}></textarea>
          {/* <Select>
              <MenuItem value={11}>Internal</MenuItem>
              <MenuItem value={12}>External</MenuItem>
              <MenuItem value={13}>Vender</MenuItem>
          </Select> */}
        
        <h3 style={{marginBottom: 10}}>Division</h3>
          <textarea placeholder='filter' onChange={(e) => onValueChange(e)} name='division' value={division}></textarea>
          {/* <Select>
              <MenuItem value={35}>Compressor</MenuItem>
              <MenuItem value={36}>Pump</MenuItem>
              <MenuItem value={37}>Filter</MenuItem>
              <MenuItem value={38}>Glass</MenuItem>
              <MenuItem value={39}>Water hitter</MenuItem>
          </Select> */}
            
            <h3 style={{marginBottom: 10}}>Category</h3>
          <textarea placeholder='quality A' onChange={(e) => onValueChange(e)} name='category' value={category}></textarea>
         {/* <Select>
              <MenuItem value={10}>Quality A</MenuItem>
              <MenuItem value={101}>Quality B</MenuItem>
              <MenuItem value={102}>Quality C</MenuItem>
          </Select> */}

<h3 style={{marginBottom: 10}}>Priority</h3>
          <textarea placeholder='high' onChange={(e) => onValueChange(e)} name='priority' value={priority}></textarea>
          {/* <Select>
              <MenuItem value={21}>High</MenuItem>
              <MenuItem value={22}>Medium</MenuItem>
              <MenuItem value={23}>Low</MenuItem>
          </Select> */}

<h3 style={{marginBottom: 10}}>Department</h3>
          <textarea placeholder='finance' onChange={(e) => onValueChange(e)} name='department' value={department}></textarea>
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



        <Button variant='contained' onClick={() => editUserDetails()} color="primary" style={{marginTop: 30}}>Submit</Button>

          
        
          </FormControl>
          </FormControl>
        </FormGroup>
    )
}

export default EditUser;
