import React, {useState} from 'react'
import {Checkbox} from '@mui/material'
import {Favorite} from '@mui/icons-material'
import {FavoriteBorder} from '@mui/icons-material'

function CheckBox() {
    const [name, setName] = useState([])

    function getValue(e) {
        let data = name;
        data.push(e.target.value)
       console.log(data)
    }
  return (
    <div>
      <h1> Check Box in Material UI</h1> 
      <Checkbox color='error'/>
      <Checkbox />
      <Checkbox color='success' value="dixita" onChange={(e) => {getValue(e)}}/>
      <Checkbox color='success' value="Sam" onChange={(e) => {getValue(e)}}/>
      <Checkbox color='success' value="Peter" onChange={(e) => {getValue(e)}}/><br/>
      <Checkbox color='success' value="keyur" indeterminate onChange={(e) => {getValue(e)}}/><br/>
      <Checkbox color='error' value="Peter" onChange={(e) => {getValue(e)}}
        icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/><br/>


    </div>
  )
}

export default CheckBox
