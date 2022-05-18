import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Redux/Login/Action';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const dispatch = useDispatch()
  const {isAuthenticate} = useSelector((store)=> store.login)

  const handleLogin = () => {
    // const payload = {
    //   username,
    //   password
    // };
    dispatch(login({email,password}))
  }

  if(isAuthenticate){
    return <Navigate to={"/"}/>
  }

  return (
    <div className='App'>

<h1>Login</h1>
        
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <TextField label="Email" variant="filled" color="success" focused onChange={(e) => {setEmail(e.target.value)}} /><br /><br />

      <TextField label="Password" variant="filled" color="success" focused onChange={(e) => {setPassword(e.target.value)}} /> <br /><br />

      <Button className='ButtonDiv' variant="contained" onClick={handleLogin} >Login</Button> <br /><br />

      <Button className='ButtonDiv' variant="contained"  onClick ={() => {navigate("/register")}}>Register</Button>

  
  

      
  
    </Box>
      
    </div>
  )
}
