import React from 'react'

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    leftBox : {
        backgroundColor: "#6fb091",
        border: "1px solid #20393a",
        width: "50%",
        height: "100vh"
    },
    rightBox: {

    }
  }));

function LoginPage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Box display="flex" flexDirection="row">
                <Box  className={classes.leftBox}></Box>
                <Box className={classes.rightBox}>
                    
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage
