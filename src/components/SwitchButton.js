import React from 'react'
import {Switch} from '@mui/material'


function SwitchButton() {

const getValue = (e, val) => {
console.log(val)
}

  return (
    <div>
      <h1>Switch in Material UI</h1>
      <Switch 
        color='error'
        size='small' //medium
        onChange={getValue}
      />
    </div>
  )
}

export default SwitchButton
