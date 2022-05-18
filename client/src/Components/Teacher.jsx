// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// import FormGroup from '@mui/material/FormGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

import "./Home.css";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Teacher() {

    const [name , setName] = useState("");
    const [gender, setGender] = useState("");
    const [age , setAge] = useState("")
    const [class1, setClass1] = useState([])

    const [data , setData] = useState([])
  
    useEffect(()=> {
      axios.get('https://evaluationteacher1.herokuapp.com/class').then((res)=> setData(res.data));
      // console.log("data1",data[0].age)
    },[])
    // console.log("data",data)


    // axios.post("http://localhost:2344/teacher",)


    const handleAdd = () => {
        // console.log("hello")
        const userData = {
            name,
            gender,
            age,
            classes: class1
        }
        console.log(userData)

        axios.post("https://evaluationteacher1.herokuapp.com/teacher",userData).then((res) => {console.log("res",res)})
    }

    const addClass = (str) =>{
        setClass1([...class1, str])
        console.log(class1)
    }

  return (
//     <div >
//       <h1 className='marginAutotext' >Add Teacher</h1>

//       <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
  
//       <TextField label="Enter Name " variant="filled" onChange={(e) => setName(e.target.value) } color="secondary" focused />
   
//     </Box> <br />


//     {/* <label>Name : </label>
//       <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value) }/><br /><br /> */}
      
//       {/* <label>Gender : </label>
//       <div>
          
//           <label>
//               <input type="radio" 
//                 // checked = "male"
//                 value={"male"}
//                 onChange =  {(e)=> {setGender(e.target.value) ; console.log(gender)}}
//                />Male
//           </label><br />

//           <label>
//               <input type="radio" 
//                 // checked = "Female"
//                />Female
//           </label><br />

//           <label>
//               <input type="radio" 
//                 // checked = "Other"
//                />Other
//           </label><br />
//       </div><br /> */}

// <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         // defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e) => {setGender(e.target.value);  
//             // console.log(e.target.value)
//             }}  />
//         <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e) => {setGender(e.target.value);  
//         // console.log(e.target.value)
//         }} />
//         <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(e) => {setGender(e.target.value) ;  
//             // console.log(e.target.value)
//             }}/>
//       </RadioGroup>
//     </FormControl> <br /> <br />


//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
  
//       <TextField label="Enter Age" variant="filled" color="secondary" onChange={(e) => setAge(e.target.value) } focused />
   
//     </Box> <br />

      

//         {/* <label>Age : </label>
//       <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value) } /><br /><br /> */}


//      {/* <label>Classes</label>
//       {
//           data.map((e) => (
//             <div>
            
//             <input type="checkbox"
//             onChange={(ab)=>{addClass(e._id)}}

//             />{e.class1}
//         </div>
//           ))
//       } <br />  */}

// <FormGroup>
//     <h3>Classes</h3>
//     {
//         data.map((ab) => (
//             <FormControlLabel control={<Checkbox/>} label={ab.class1} onChange={(b)=>{addClass(ab._id)}} />
//         ))
//     }
      
// </FormGroup>



// <Stack spacing={2} direction="row">
//       <Button variant="contained"  onClick={ handleAdd}>ADD</Button>
//     </Stack>

//     {/* <button onClick={ handleAdd}>ADD</button> */}

//     </div>



<div className='App'>
  <h1>Add Teacher</h1>

<Box className='formTeacher'
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '45ch' },
  }}
  noValidate
  autoComplete="off"
>

  <TextField label="Enter Name" variant="filled" onChange={(e) => setName(e.target.value) }color="success" focused /><br /><br />

  <TextField label="Enter Age" variant="filled" onChange={(e) => setAge(e.target.value) }color="success" focused /><br /><br />

  <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} onClick={(e)=>{setGender(e.target.value)}} label="Female" />
    <FormControlLabel value="male" control={<Radio />} onClick={(e)=>{setGender(e.target.value)}}label="Male" />
    <FormControlLabel value="other" control={<Radio />} onClick={(e)=>{setGender(e.target.value)}}label="Other" />
  </RadioGroup><br /><br />

  <FormLabel id="demo-radio-buttons-group-label">Classes</FormLabel>


{
  data.map((e) => (
    <FormControlLabel control={<Checkbox  />} onChange={(ab)=>{addClass(e._id)}} label={e.class1} />
  ))
}

  {/* <FormControlLabel control={<Checkbox/>} label="Label" /> */}

  <Button variant="contained" onClick={ handleAdd}>Add</Button>


</FormControl>


{/* <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
</FormGroup> */}


</Box>

  
</div>


  )
}
