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

import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
            <Container
                maxWidth={'xs'}
            >
    <div className="App">
      <header className="App-header">
          <AppBar color={'secondary'}>
              <Toolbar>
                  <IconButton>
                      <MenuIcon/>
                      <div>Some str</div>
                      <Button>
                          Login
                      </Button>
                  </IconButton>
              </Toolbar>
          </AppBar>
          <ButtonStyled/>
          <Grid container spacing={2} justify={'center'}>
              <Grid item xs={3} sm={6}>
                  <Paper style={{
                      height:75,
                      width: '100%',
                  }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                  <Paper style={{
                      height:75,
                      width: '100%',
                  }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                  <Paper style={{
                      height:75,
                      width: '100%',
                  }} />
              </Grid>
              {/*<Grid item xs={3}>*/}
              {/*    <Paper style={{*/}
              {/*        height:75,*/}
              {/*        width: 50,*/}
              {/*    }} />*/}
              {/*</Grid>*/}
          </Grid>
          
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
            </Container>
        </ThemeProvider>
  );
}

export default App;
