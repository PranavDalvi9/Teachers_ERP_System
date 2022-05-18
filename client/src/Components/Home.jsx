import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import "./Home.css"

// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Home.css"


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Home() {


  const [data, setData] = useState([])
  const [pagNum, setPagNum] = useState(1)
  const[doctor, setDoctor] = useState("")

  useEffect(() => {
    axios.get(`https://evaluationteacher1.herokuapp.com/teacher`,{
      params:{
        page:pagNum,
        size:4,
        name:doctor

      }
    }).then((res) => setData(res.data));
    console.log("updated");
  }, [pagNum, doctor])
  console.log("data", data)

  return (
    <div >
      <h1 className='marginAutotext' className="App">Home</h1>

        <div className='inputMUI'>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1100 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search By Teacher Name"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => {setDoctor(e.target.value) ; console.log("doc",doctor)}}
      />    
    </Paper>
        </div>


      {/* <input type="text"  placeholder='Enter Doctor' onChange={(e) => {setDoctor(e.target.value) ; console.log("doc",doctor)}}/>
      <button>Search</button> */}


      {/* <div className='individualTec'>
      {
        data.map((e) => (


          <div className='IndiviTeachDat' >
            <h3>Name : {e.name}</h3>
            <h3>Age : {e.age}</h3>
            <h3>Gender : {e.gender}</h3>
            <h3>classes : {e.classes.length}</h3>
            <div className='classFlex'>
            <h3>Classes :</h3>
              {
                e.classes.map((el) => (
                  <p>{el.class1}</p>
                ))
              }
            </div>

          </div>
        ))
      }

      </div> */}


      <div className='individualTec'>

        {
          data.map((e)=>(
            <Card sx={{ maxWidth: 340, minHeight:170 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name : {e.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age : {e.age}  
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender : {e.gender}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className='buttons123' size="small">Classes : {e.classes.length}</Button>
            </CardActions>
          </Card>
          ))
        }
     

      </div>
      

      <div className='PaginationClass'>
        <button onClick={()=>{setPagNum(pagNum-1)}}>Previous</button>
        <button onClick={()=>{setPagNum(1)}}>1</button>
        <button  onClick={()=>{setPagNum(2)}}>2</button>
        <button onClick={()=>{setPagNum(3)}}>3</button>
        <button onClick={()=>{setPagNum(4)}}>4</button>
        <button onClick={()=>{setPagNum(5)}}>5</button>
        <button onClick={()=>{setPagNum(pagNum+1)}}>Next</button>
      </div>
    </div>
  )
}
