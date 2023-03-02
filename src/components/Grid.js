import React from 'react'
import { Grid } from '@mui/material'
function GridSystem() {
    return (
        <div>
            <Grid container spacing={2}>
               <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid> 
               <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 2</h1></Grid> 
               <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 3</h1></Grid> 
               <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 4</h1></Grid> 
            </Grid>

        </div>
    )
}

export default GridSystem
