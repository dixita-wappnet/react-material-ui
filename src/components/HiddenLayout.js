import React from 'react'
import {Grid, Hidden} from '@mui/material'
function HiddenLayout() {
  return (
    <Grid item xs={12} container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"green"}}>Block 1</h1></Grid>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"green"}}>Block 2</h1></Grid>
        <Hidden only={['sm','lg']}><h1 style={{backgroundColor:"green",flex:1}}>Block 3</h1></Hidden>
        <Grid item lg={3} sm={6} xs={12}><h1  style={{backgroundColor:"green"}}>Block 4</h1></Grid>
    </Grid>
  )
}

export default HiddenLayout
