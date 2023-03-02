import React from 'react'
import {TextField} from '@mui/material'

function Textfield() {

const getData = (e) => {
     console.log(e.target.value)
}

  return (
    <div>
      <h1> Text Field in Material UI</h1><br/>
      <TextField 
         label="Enter Your Name"
         color='success'
         variant='outlined' // standard , filled
        //  type="password" // number, button 
        onChange={getData}
      />
    </div>
  )
}

export default Textfield
