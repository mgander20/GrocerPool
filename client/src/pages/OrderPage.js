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
 import "../styles/shared.css"

 // Modules
 import { AppContext } from "../State"
import { NavbarLoggedIn } from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
    
    mainBox:{
        backgroundColor: 'rgba(44,174,159,09)',
        height: '90vh',
        textAlign: "center"
    },
    subBox: {
        backgroundColor: 'white',
        margin: "300px 0px",
        height: "280px",
        width: "450px",
        padding: "10px",
        borderRadius: "10px"
    },
    rightBox: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: '60px',
    },
    btn2: {
        backgroundColor: 'rgba(44,174,159,09)',
        color: "white",
        margin: "5px 10px",
        minWidth: "100px"
    },
  }));


function OrderPage({ history }) {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <NavbarLoggedIn />
            <Box className={classes.mainBox} display="flex" flexDirection="row" borderRadius="7%" justifyContent="center" justifyItems="center">
                <Box className={classes.subBox}>
                    <h1 className="header-main">Grocery Trip</h1>
                    <h1 className="header-sub">Going to the store or need a delivery?</h1>
                    <Box display="flex" flexDirection="column">
                        <Button 
                            onClick={()=> {history.push("/add-trip")}}
                            className={classes.btn2}
                            >Announce Grocery Trip</Button>
                        <Button
                            onClick={()=> {history.push("/add-grocery")}}
                            className={classes.btn2}
                            >Place an Order for Delivery</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default OrderPage
