import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

 //CSS 
 import "../styles/shared.css"

 // Modules
 import { AppContext } from "../State"
import { NavbarLoggedIn } from '../components/Navbar';
import { ORDER_DATA } from '../util/Consts';
import { Table } from '@material-ui/core';

// COmponents
import { ProfileCardTwo } from '../pages/Home'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(44,174,159,0.1)',
    },
    body: {
        margin: '60px 0px'
    },
    gridList: {
        height: "319px",
        border: "1px solid grey",
    }, 
    table: {
        display: "flex",
        flexDirection: "row",
        overflowX: undefined, 
    },
    mainBox:{
        backgroundColor: 'rgba(44,174,159,0.1)',
        height: '70vh',
        textAlign: "center",
        justifyItems: "center"
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
    inputGroup: {
        color: "white",
        marginLeft: "300px",
        backgroundColor: "rgba(231, 219, 190, 0.42)",
        padding: '50px',
        margin: "20px",
        borderRadius: "30px"
    },
    input: {
        margin: 5,
        borderColor: "white"
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftBox: {
        border: "1px solid rgba(44,174,159,09)",
        width: "50%",
        margin: "5px"
    },
    rightBox: {
        border: "1px solid rgba(44,174,159,09)",
        backgroundColor: "white",
        margin: "5px",
        width: "50%",

    },
    img: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        padding: '10px'
    },
    cellBody: {
        border: "1px solid gray",
        backgroundColor: "white",
        cursor: 'pointer'
    },
    chatConversation: {
        width: "100%",
        height: "400px",
        padding: "5px"
    },
    chatInputWrapper: {
        width: "100%",
        padding: "5px"
    },
    textField: {
        width: "100%",
        minHeight: "55px"
    }
  }));


function ChatPage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <NavbarLoggedIn />
            <Box className={classes.wrapper}>
                <Box className={classes.leftBox}>
                    {
                        [1,2,3,4].map(()=> <ChatCell/>)
                    }
                </Box>
                <Box className={classes.rightBox}>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="row">
                            <img className={classes.img} src="https://i.imgur.com/tLKjtrE.png"></img>
                            <p className="header-main">Name</p>
                        </Box>
                        <Box className={classes.chatConversation}>

                        </Box>
                        <Box className={classes.chatInputWrapper} display="flex" flexDirection="row"> 
                            <TextField className={classes.textField}></TextField>
                            <Button>Send</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

function ChatCell() {
    const classes = useStyles();

    return(
        <Box className={classes.cellBody} p={2} display="flex" direction="row">
            <img className={classes.img} src="https://i.imgur.com/tLKjtrE.png"></img>
            <Box>
                <p>Name</p>
                <p className="body-text-three">Recent Messages</p>
            </Box>
        </Box>
    )
}

export default ChatPage
