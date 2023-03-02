import React from 'react'
import { Container } from '@mui/material'
function LayoutContainer() {
    return (
        <div>
            <h1> Layout Container in Material UI</h1><br/>
            <Container maxWidth="xs" style={{backgroundColor:'skyblue'}}>
                <h1> Layout Container in Material UI</h1>
            </Container><br/>
            <Container maxWidth="sm" style={{backgroundColor:'red'}}>
                <h1> Layout Container in Material UI</h1>
            </Container><br/>
            <Container maxWidth="md" style={{backgroundColor:'green'}}>
                <h1> Layout Container in Material UI</h1>
            </Container><br/>
            <Container maxWidth="lg" style={{backgroundColor:'yellow'}}>
                <h1> Layout Container in Material UI</h1>
            </Container><br/>
            <Container fixed style={{backgroundColor:'blue'}}>
                <h1> Layout Container in Material UI</h1>
            </Container>


        </div>
    )
}

export default LayoutContainer
