import React, {useState} from 'react'
import {Radio} from '@mui/material'

function RadioButton() {
  const [value, setValue] = useState("")
  const [depat, setDepart] = useState("")

  function handleChange(e) {
      // alert('Please select')
      setValue(e.target.value)
      console.log(e.target.value)
  }
  function departChange(e) {
      console.log(e.target.value)
      setDepart(e.target.value)
  }
  return (
    <div>
      <h1>Radio Button in Material UI</h1>
      <div>
        <span><strong>Gender: </strong>
        <Radio checked={value==="male"} color="success" value="male" onChange={handleChange}/> <span>Male</span>
        <Radio checked={value==="female"} color="warning" value="female" onChange={handleChange} /><span>Female</span>
        <Radio checked={value==="other"} color="error" value="other" onChange={handleChange} /><span>Other</span>
        </span>
        <br/>
        <span><strong>Department: </strong>
        <Radio checked={depat==="CSE"} color="success" value="CSE" onChange={departChange}/> <span>CSE</span>
        <Radio checked={depat==="Ele"} color="warning" value="Ele" onChange={departChange}/><span>Ele</span>
        <Radio checked={depat==="EC"} color="error" value="EC"  onChange={departChange}/><span>EC</span>
        </span>
        
      </div>
    </div>
  )
}

export default RadioButton
