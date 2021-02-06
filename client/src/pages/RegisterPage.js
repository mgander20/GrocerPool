import React, { useState } from 'react'
import { Link } from "react-router-dom";

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// CSS
import "../styles/register.css"

const useStyles = makeStyles((theme) => ({
    leftBox : {
        backgroundColor: "#6fb091",
        width: "50%",
        height: "100vh"
    },
    rightBox: {
        display: "flex",
        flexDirection: "column",
        margin: "auto"
    }
  }));

function RegisterPage() {

    const classes = useStyles();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState(false)


    const doRegistration = () => {
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        console.log(email)
    }

    const validInput = !(email && ( password === confirmPassword))

    return (
        <Container maxWidth="lg">
            <Box display="flex" flexDirection="row">
                <Box  className={[classes.leftBox, "leftBox"]}></Box>

                <Box className={classes.rightBox}>
                    <Link to="/login" variant="contained">Sign In Instead</Link>
                    <h1>Join the Community</h1>
                    <TextField 
                        required 
                        label="email" 
                        onChange={(e)=> { setEmail(e.target.value) }}
                        />
                    <TextField 
                        required 
                        type="password" 
                        label="Password" 
                        onChange={(e)=> { setPassword(e.target.value) }}
                        />
                    <TextField 
                        required 
                        type="password" 
                        label="re-type password"
                        onChange={(e)=> { setConfirmPassword(e.target.value) }}
                        />
                    <Button 
                        disabled={validInput} 
                        type="default"
                        onClick={doRegistration}
                        >Submit</Button>
                </Box>
                {
                    error ?
                <Box>
                    <h5>Registration Failed</h5>
                </Box> : null
                }
            </Box>
        </Container>
    )
}

export default RegisterPage
