import React from 'react'
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
        border: "1px solid #20393a",
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

    return (
        <Container maxWidth="lg">
            <Box display="flex" flexDirection="row">
                <Box  className={[classes.leftBox, "leftBox"]}></Box>

                <Box className={classes.rightBox}>
                    <Link variant="contained">Sign In Instead</Link>
                    <h1>Join the Community</h1>
                    <TextField required label="email" />
                    <TextField required type="password" label="Password" />
                    <TextField required type="password" label="re-type password"/>
                    <Button type="default">Submit</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default RegisterPage
