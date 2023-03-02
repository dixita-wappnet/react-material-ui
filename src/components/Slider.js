import React,{useState} from 'react'
import { Slider } from '@mui/material'
import { Update } from '@mui/icons-material'


function SliderBar() {

    const [val, setVal] = useState([40,100])
    const mark = [
        {
            value: 0,
            label: "Start"
        },
        {
            value: 100,
            label: "Middle"
        },
        {
            value: 200,
            label: "End"
        }
    ]

    const getValue = (e, val) => {
        console.log(val)
    }

    const updateVal =(e, item) => {
        setVal(item)
        console.log(e,item)
    }

    return (
        <div>
            <h1>Slider in material UI</h1>
            <Slider /><br />
            <div style={{ height: 300, width: 300, marginLeft: 100 }}>
                <Slider
                    color='error'
                    defaultValue={100}
                    step={5}
                    max={200}
                    marks={mark}
                    valueLabelDisplay="auto"
                    onChange={getValue}
                    orientation="vertical"
                /><br /><br />
            </div>
            <div style={{ width: 300, marginLeft: 500 }}>
                <h1>Range Slider</h1>
                <Slider 
                  value={val} 
                  max={200}
                  onChange={updateVal}
                  />
            </div>

        </div>
    );
}

export default SliderBar
