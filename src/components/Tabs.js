import React,{useState} from 'react'
import {Tab, Tabs, AppBar} from '@mui/material';
import TabPanel from './TabPanel'

function ReactTabs(){

    const [value, setValue] = useState(0)
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
    }

   return (
    <div>
      <h1>Tabs in Material UI</h1>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Item 1"/> 
          <Tab label="Item 2" color='error'/> 
          <Tab label="Item 3"/> 
        </Tabs>
      </AppBar><br/><br/>
      <TabPanel value={value} index={0}>
        Item One Details
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Details
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Details
      </TabPanel>
    </div>
  );
}
export default ReactTabs


