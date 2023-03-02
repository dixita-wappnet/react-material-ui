import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import About from './About'
import Home from './Home'
import {Menu, MenuItem, Button} from '@mui/material'

function RouterMenu() {

const [achor, setAchor] = React.useState(null)

const handleMenu = (e) => {
    setAchor(e.currentTarget)
    console.log('opened')
}

const closeMenu = () => {
    setAchor(null)
    console.log('closed')
}

  return (
    <>
    <br/>
    <BrowserRouter>
    <h1>React Router Menu in Material UI</h1><br/>
    <Button onClick={handleMenu}>Menu</Button><br/>
    <Menu open={achor} onClick={closeMenu} >
        <MenuItem onClick={closeMenu}><NavLink to="/">Home</NavLink><br/></MenuItem>
        <MenuItem onClick={closeMenu}><NavLink to="/about">About</NavLink></MenuItem>
    </Menu>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
</>
  )
}

export default RouterMenu
