import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import Checkbox from '@material-ui/core/Checkbox'

import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";

import {green, orange} from "@material-ui/core/colors";

const useStyles = makeStyles({
    root:{
        border:0,
        borderRadius:15,
        color:"white",
        padding: '0 30px',
        background:"linear-gradient(45deg, #333, #000)",
        marginBottom : 15,
    }
})

const theme = createMuiTheme({
    palette:{
        primary:{
            main: green[400],
        },
        secondary:{
            main: orange[500],
        }
    }
})

function ButtonStyled(){
    const classes = useStyles();
    
    return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
    const [checked, setChecked] = useState(true)
    return(
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                    checked={checked}
                    icon={<DeleteIcon/>}
                    checkedIcon={<SaveIcon/>}
                    onChange={(e)=>setChecked(e.target.checked)}
                    inputProps={{
                        'arial-label' : 'secondary checkbox'
                    }}
                    />
                }
                label={"Test checkbox"}/>
        </div>
    )
}

function App() {
  return (
        <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
          <ButtonStyled/>
          <TextField
              // variant={"filled"}
              variant={"outlined"}
              color={"primary"}
              // type={"date"}
              type={'email'}
              label={"The time"}
              
              value={"test@test.com"}
          />
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
        </ThemeProvider>
  );
}

export default App;
