import React, { useState } from 'react'
import axios from 'axios';
import { getClasses2 } from './Redux/Classesss/Action';
import { useDispatch } from 'react-redux';

import "./Home.css"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Class() {
  const dispatch = useDispatch()

    const [class1 , setClass1] = useState("");

    const handleAdd =() => {
        console.log("hello")
        dispatch(getClasses2(class1))

    }
 
  return (
    <div className='App'>
      <h1>Add Class</h1>
      {/* <h1 className='marginAutotext'>Add Class</h1>

        <label>Class :  </label>
      <input  className='marginAuto11' type="text" placeholder='Add Class' onChange={ (e) => {setClass1(e.target.value)}}/><br/><br />

        <button onClick={handleAdd}>Add</button> */}

        
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <TextField label="Enter Class" variant="filled" color="success" focused  onChange={ (e) => {setClass1(e.target.value)}}/><br /><br />

      
  


  <Button variant="contained" onClick={handleAdd}>Add Class</Button>
 

    </Box>

    </div>
  )
}
