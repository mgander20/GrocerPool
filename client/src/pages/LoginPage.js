import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

 //CSS 
 import "../styles/login.css"

 // Modules
 import { AppContext } from "../State"

const useStyles = makeStyles((theme) => ({
    
    mainBox:{
        margin: "7vh",
        borderRadius: "1vh",
    },
    leftBox : {
        backgroundColor: "#95592F",
        width: "50%",
        height: "86vh",
    },
    rightBox: {
        backgroundColor: "#20393A",
        display: "flex",
        flexDirection: "column",
        margin: "auto"
    }
  }));

function LoginPage({ history }) {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)


    const validInput = !(email && password)

    const doLogin = () => {
        if(email === "test" && password=== "test"){
            console.log("SEND THESE TO POST", email, password )
            history.push("/")
            dispatch({
                type: "doLogin"
            })
        } else {
            setError(true)
        }
    }
    return (
        <Container maxWidth="lg">
            <Box className={classes.mainBox} display="flex" flexDirection="row" borderRadius="7%">
                <Box  className={[classes.leftBox, "leftBox"]} borderRadius="7% 0 0 7%"></Box>
                <Box className={classes.rightBox}>
                    <Link to="/register" variant="contained">Register Instead</Link>
                    <h1>Welcome Back!</h1>
                    <TextField 
                        onChange={(e)=> { setEmail(e.target.value) }}
                        required 
                        label="Email" />
                    <TextField 
                        onChange={(e)=> { setPassword(e.target.value) }}
                        required 
                        type="password" 
                        label="Password"/>
                    <Button 
                        disabled={validInput}
                        onClick={doLogin}
                        type="default"
                        >Login</Button>
                    { error ? <h2>WRONG PASSWORD</h2> : null }

                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage
