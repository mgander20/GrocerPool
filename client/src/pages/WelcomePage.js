import React from 'react'
import { Link } from "react-router-dom";
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

// components
import { ItemCard } from "../components/ItemCard";


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
    link: {
        textDecoration: 'none'
    }
  }));


const CARD_DATA = [
    { title: "1. Going to Grocey? Pickup grocery for your friend while your at it.", src: "https://i.imgur.com/Ahe5fUo.png" },
    { title: "2. Don't feel safe to go out and do your grocey? Post a request for a volunteer to pick it up for you.", src: "https://i.imgur.com/NhoPfee.png" },
    { title: "3. Accounce that your making a quick grocey run and see if anyone needs anything. ", src: "https://i.imgur.com/rAGlTtz.png" },
    { title: "4. Get estimate of how much your or your friends grocey costs", src: "https://i.imgur.com/FFFJHfP.png" },
    { title: "5. Can't pay back? well, we can help you with that!", src: "https://i.imgur.com/Veg0t8v.png" },
]

function WelcomePage() {
    const classes = useStyles();

    return (
        <>
        <Container maxWidth="lg" className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <h1>appname</h1>
                <Box m={2}>
                    <Link className={classes.link} to="/login">
                        <Button
                            className={classes.btn2}
                            variant="contained"
                        >Login</Button>
                    </Link>
                    <Link className={classes.link} to="/register">
                        <Button
                            className={classes.btn3}
                            variant="contained"
                        >Register</Button>
                    </Link>
                </Box>
            </Box>

            <Box  display="flex" justifyContent="space-around" className="welcome-body">
                <div>
                    <h1 className="header-main">Welcome</h1>
                    <p className="header-sub">
                        COVID-Friendly Grocery Shopping through community partnership
                    </p>
                    <Link className={classes.link} to="/login">
                        <Button className={classes.btn} variant="contained">Get Started Today</Button>
                    </Link>
                </div>
                <img className="welcome-image" src={Image}></img>
            </Box>
        </Container>

        <Container className={classes.bodyTwo} maxWidth="lg">
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                {CARD_DATA.map((item) => (
                    <ItemCard key={item} item={item}/>
                ))}
                </Grid>
            </Grid>
        </Container>

        </>
    )
}

export default WelcomePage
