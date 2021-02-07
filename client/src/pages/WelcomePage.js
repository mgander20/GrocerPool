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
        backgroundColor: '#20393A',
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
    { title: "1. Going to get Groceries? Pickup groceries for your friend while you're at it.", src: "https://i.imgur.com/Ahe5fUo.png" },
    { title: "2. Don't feel safe to go out and do your grocery shopping? Ask a volunteer to pick it up for you.", src: "https://i.imgur.com/NhoPfee.png" },
    { title: "3. Announce that you're making a quick grocery run and see if anyone needs anything. ", src: "https://i.imgur.com/rAGlTtz.png" },
    { title: "4. Get estimates of how much your groceries costs", src: "https://i.imgur.com/FFFJHfP.png" },
    { title: "5. Can't pay back? We can help you with that!", src: "https://i.imgur.com/Veg0t8v.png" },
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
                    <Link className={classes.link} to="/register">
                        <Button className={classes.btn} variant="contained">Get Started Today</Button>
                    </Link>
                </div>
                <img className="welcome-image" src={Image}></img>
            </Box>
        </Container>

        <Box  className={classes.bodyTwo} display="flex" justifyContent="space-around" className="welcome-body">
                <div>
                    <h1 className="header-body">Our Mission</h1>
                    <p className="header-sub">
                        Reduce the contact risk of COVID-19 by decreasing exposure of frequent grocery shoppers. We encourage 
                        clients to collaborate and take turns grocery shopping. Our app makes this much easier, with the ability
                        customize shopping lists every week, price estimates, and private messaging! We can pair you up with 
                        friends in your area and even accomodate urgent grocery needs. Whether you need groceries today or next week, 
                        we've got your back!
                    </p>
                </div>
            </Box>

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
