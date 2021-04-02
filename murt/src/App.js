import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete'

import Checkbox from '@material-ui/core/Checkbox'

function CheckboxExample(){
    const [checked, setChecked] = useState(true)
    return(
        <div>
            <Checkbox
                checked={checked}
                onChange={(e)=>setChecked(e.target.checked)}
                color={'secondary'}
                // disabled={true}
            />
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ButtonGroup variant={'contained'} color={'primary'}>
            <Button
                startIcon={<SaveIcon/>}
            >
                Save
            </Button>
    
            <Button
                startIcon={<DeleteIcon/>}
            >
                Discard
            </Button>
            
        </ButtonGroup>
        
        <CheckboxExample/>
        
        
      </header>
    </div>
  );
}

export default App;
