import React from 'react'
import {Box, Button} from '@mui/material'

function LayoutBox() {
  return (
    <div>
      <h1>Layout || Box in Material UI</h1><br/>
      <Box m={20} clone >
      <Button variant="contained"  style={{color:'red'}} >Hello</Button>
      </Box>
    </div>
  )
}

export default LayoutBox
