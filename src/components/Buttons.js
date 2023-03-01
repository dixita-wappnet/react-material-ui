import React, { useState } from 'react'
import { Button } from '@mui/material'
import  Delete  from '@mui/icons-material/Delete'
import { Edit } from '@mui/icons-material';

function Buttons() {
  const [color, setColor] = useState("error");
  const [disableBtn, setDisableBtn] = useState(false);

  function handleUppercase() {

    alert("Your function is work on text convert into lowercase to uppercase")

  }
  function colorSet(){
    setColor("secondary"); 
  }
  function disableBtnSet(){
    setDisableBtn(true);
  }
  return (
    <>
      <div className='container'>
        <h2>React Normal Button</h2>
        <button>Click Me</button><br /><br />
        <h2>React Material Ui Buttons</h2>
        <Button variant="contained" color="primary">MUI Button</Button>
        <Button variant="contained" color="error">MUI Button</Button>
        <Button variant="contained" color="secondary">MUI Button</Button>
        <Button variant="contained" color="success">MUI Button</Button><br />
        <br />
        <h2>Without Variant</h2>
        <Button color="primary">MUI Button</Button>
        <Button color="error">MUI Button</Button>
        <Button color="secondary">MUI Button</Button>
        <Button color="success">MUI Button</Button><br />
        <br />
        <h2>Different Variant</h2>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button><br />
        <br />
        <h2>Simple and link Buttons</h2>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>
      <br />
      <div>
        <h1>Advance Level</h1>
        <Button variant="contained" color="primary" onClick={() => alert('This is a Material UI Button')}>Alert</Button>
        <Button variant="contained" color="success" onClick={() => { handleUppercase() }}>Function Called</Button>
        <Button variant="contained" color={color} onClick={() => {colorSet()}}>useState-change Color</Button>
        <Button variant="contained" disabled={disableBtn} color="secondary" onClick={() => {disableBtnSet()}}>Disable</Button>
        <Button variant='contained' size='large'>Large Size</Button>
        <Button variant='contained' size='small' color='error'>Small Size</Button><br/><br/>
        <h1>Icon Button </h1>
        <Button variant="contained" startIcon={<Delete/>}>Delete</Button>
        <Button variant="contained" color='success' endIcon={<Edit/>}>Edit</Button>
        <Button variant="outlined"  endIcon={<Edit/>}>Edit</Button>
      </div>
    </>
  )
}

export default Buttons
