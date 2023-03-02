import React, {useState} from 'react'
import {Select, MenuItem} from '@mui/material'

function SelectBox() {
const [course, setCourse] = useState("")

const updateValue = (e,val) => {
    console.log(e.target.value)
  setCourse(e.target.value)
}
  return (
    <div>
        <h1>Select Box in Material UI</h1><br/>
      <Select value={course} onChange={updateValue} displayEmpty>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value={1}>Node</MenuItem>
        <MenuItem value={2}>PHP</MenuItem>
        <MenuItem value={3}>JavaScript</MenuItem>
        <MenuItem value={4}>Java</MenuItem>
      </Select>
    </div>
  )
}

export default SelectBox
