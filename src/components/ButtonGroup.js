import React from 'react'
import {ButtonGroup,  Button } from '@mui/material';

function Group() {
    return (
        <div>
            <h1> Button Group in Material UI</h1><br/>
            <ButtonGroup orientation='vertical' variant='contained' color="success">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    );
}

export default Group
