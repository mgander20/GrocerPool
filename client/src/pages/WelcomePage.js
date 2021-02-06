import React from 'react'
import { NavbarPublic } from '../components/Navbar'

// CSS
import "../styles/welcome.css";

// material ui
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


// Assets
import Image from '../styles/img/welcome-logo.png';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px 100px',
        backgroundColor: 'rgba(223, 230, 237, 0.8)',
    },
    btn: {
        backgroundColor: 'rgba(44,174,159,09)',
        color: "white",
        fontSize: '20px',
    },
    btn2: {
        backgroundColor: 'rgba(44,174,159,09)',
        color: "white",
        margin: "1px 10px",
        minWidth: "100px"
    },
    btn3: {
        backgroundColor: 'black',
        color: "white",
        margin: "1px 10px",
        minWidth: "100px"
    },
    bodyTwo: {
        padding: '80px 0px 0px 0px'
    },
    paper: {
        height: 200,
        width: 200,
      },
  }));

const CARD_DATA = [
    { title: "Going to Metro", img: "" },
    { title: "Going to Metro", img: "" },
    { title: "Going to Metro", img: "" },
    { title: "Going to Metro", img: "" },
    { title: "Going to Metro", img: "" },
]

function WelcomePage() {
    const classes = useStyles();

    return (
        <>
        <Container maxWidth="lg" className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <h1>appname</h1>
                <Box m={2}>
                    <Button
                        className={classes.btn2}
                        variant="contained"
                    >Login</Button>
                    <Button
                        className={classes.btn3}
                        variant="contained"
                    >Register</Button>
                </Box>
            </Box>

            <Box  display="flex" justifyContent="space-around" className="welcome-body">
                <div>
                    <h1 className="header-main">Welcome</h1>
                    <p className="header-sub">
                        COVID-Friendly Grocery Shopping through community partnership
                    </p>
                    <Button className={classes.btn} variant="contained">Get Started Today</Button>
                </div>
                <img className="welcome-image" src={Image}></img>
            </Box>
        </Container>

        <Container className={classes.bodyTwo} maxWidth="lg">
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                {CARD_DATA.map((value) => (
                    <Grid key={value} item>
                    <Paper className={classes.paper} />
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Container>

        </>
    )
}

export default WelcomePage
