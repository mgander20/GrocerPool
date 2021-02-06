import React from 'react'
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



function LoginPage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Box className={classes.mainBox} display="flex" flexDirection="row" borderRadius="7%">
                <Box  className={[classes.leftBox, "leftBox"]} borderRadius="7% 0 0 7%"></Box>
                <Box className={classes.rightBox}>
                    <Link to="/register" variant="contained">Register Instead</Link>
                    <h1>Welcome Back!</h1>
                    <TextField required label="Email" />
                    <TextField required type="password" label="Password"/>
                    <Button type="default">Login</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage
