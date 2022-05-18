import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import { register } from './Redux/Login/Action';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Navigate } from 'react-router-dom';




export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [name , setname] = useState("");
  const [mobile , setMobile] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const {isAuthenticate} = useSelector((store)=> store.login)

  const handleRegister = () => {
    const payload = {
      name,
      mobile,
      email,
      password
    };
    console.log("paylood",payload)
    dispatch(register(payload))

    // name: name,
    //   email: userEmail,
    //   mobile: mobile,
    //   password: userPassword,
  }

  if(isAuthenticate){
    return <Navigate to={"/"}/>
  }

  return (
    <div className='App'>
      <h1>Register User</h1>

        
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <TextField label="Enter First Name" variant="filled" color="success" focused onChange={(e) => {setname(e.target.value)}} /><br /><br />

      <TextField label="Enter Number" variant="filled" color="success" focused onChange={(e) => {setMobile(e.target.value)}} /><br /><br />

      <TextField label="Enter Email" variant="filled" color="success" focused onChange={(e) => {setEmail(e.target.value)}} /><br /><br />

      <TextField label="Enter Password" variant="filled" color="success" focused onChange={(e) => {setPassword(e.target.value)}} /> <br /><br />

      {/* <Button variant="contained">Login</Button><br /> */}

    
     <Button className='ButtonDiv' variant="contained" onClick={handleRegister}>Register</Button><br /><br />

<Button className='ButtonDiv' variant="contained"  onClick ={() => {navigate("/login")}}>Login</Button>
  
  
    </Box>
      
    </div>
  )
}
