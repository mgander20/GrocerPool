import { AppContext } from "../State"
import React, { useContext } from 'react';
import { NavbarLoggedIn } from "../components/Navbar";
import { Link } from "react-router-dom";

import { ORDER_DATA, SHOPPERS_DATA } from "../util/Consts";


import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { Button } from "@material-ui/core";


import { makeStyles } from '@material-ui/core/styles';

import "../styles/shared.css"
import "../styles/welcome.css"
import "../styles/home.css"

const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
    },
    bodySub: {
        border: "1px solid grey",
        overflowX: undefined, 
    },
    table: {
        display: "flex",
        flexDirection: "row",
        overflowX: undefined, 
    },
    body: {
        margin: '60px 0px'
    },
    cardBody: {
        textAlign: 'center'
    },
    bottomBannerBody: {
        textAlign: 'center',
        height: '250px',
        backgroundColor: 'rgba(44,174,159,09)',
        color: 'white',
    },
    gridList: {
        height: "319px",
        border: "1px solid grey",
    }, 
    notificationBody: {
        backgroundColor: 'rgba(44,174,159,09)',
        color: "white",
        padding: '20px'
    },
    notificationCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btnViewAll: {
        backgroundColor: 'rgba(223, 230, 237, 0.8)',
        margin: '20px 0px 0px 40px',
    }
}))



function Home() {
    const classes = useStyles();

    const { state, dispatch } = useContext(AppContext)

    return (
        <Container maxWidth="lg">
            <NavbarLoggedIn />
            <img src="https://i.imgur.com/rYXiycW.jpg" className={classes.banner}></img>

            <Box className={classes.body}>
                <h1 className="header-main">Upcoming Scheduled Trips</h1>
                <GridList className={classes.gridList} cols={2.5}>
                    <Table className={classes.table}>                    
                        {
                            SHOPPERS_DATA.map(item => (<ProfileCard />))
                        }
                    </Table>
                </GridList>
            </Box>
            
            <Box className={classes.body}>
                <h1 className="header-main">Upcoming Requested Orders</h1>
                <GridList className={classes.gridList} cols={2.5}>
                    <Table className={classes.table}>                    
                        {
                            ORDER_DATA.map(item => (<ProfileCardTwo />))
                        }
                    </Table>
                </GridList>
            </Box>

            <Box className={classes.notificationBody}>
                <h1 className="header-main header-main-two">Notifications</h1>
                {
                    [1,2,3,4].map(item => (
                    <Box m={5}>
                        <hr></hr>
                        <NotificationBox />
                    </Box>
                    ))
                }
                <Button className={classes.btnViewAll} color="primary">View All</Button>
            </Box>

            <img src="https://i.imgur.com/Veg0t8v.png" className={classes.banner}></img>
            
            <BottomBanner />
        </Container>
    )
}

export function ProfileCard() {
    const classes = useStyles();

    return(
        <Box m={3} className={classes.cardBody}>
            <div className="profileCard">
                <img className="profile-img" src="https://i.imgur.com/tLKjtrE.png"></img>
                <p className="header-two">Tina Smith</p>
                <p className="body-text-two">is going to Shoppers</p>
                <p className="body-text-three">3:00PM, Feb 04</p>
            </div>
            <div className="profileCard-hidden">
                <img className="profile-img" src="https://i.imgur.com/tLKjtrE.png"></img>
                <Button>Request Order</Button>
            </div>
        </Box>
    )
}

export function ProfileCardTwo() {
    const classes = useStyles();

    return(
        <Box m={3} className={classes.cardBody}>
            <div className="profileCard">
                <img className="profile-img" src="https://i.imgur.com/Ahe5fUo.png"></img>
                <p className="header-two">Tina Smith</p>
                <p className="body-text-two">needs items from</p>
                <p className="body-text-three">Longos</p>
            </div>
            <div className="profileCard-hidden">
                <img className="profile-img" src="https://i.imgur.com/Ahe5fUo.png"></img>
                <Button>Pickup Order</Button>
            </div>
        </Box>
    )
}

export function NotificationBox() {
    const classes = useStyles();

    return(
        <Box className={classes.notificationCard}>
            <div className="notification-card-body">
                <img className="profile-img-notification" src="https://i.imgur.com/tLKjtrE.png"></img>
                <p className="body-text-four">Tina Smith</p>
            </div>
            <p className="body-text-four">30 Minutes</p>
        </Box>
    )
}

export function BottomBanner() {
    const classes = useStyles();

    return (
        <Box className={classes.bottomBannerBody}>
            <Box pt={8}>
                <img className="profile-img-notification" src="https://st2.depositphotos.com/6572538/10193/v/950/depositphotos_101937050-stock-illustration-tobacco-tree-plants-and-flowers.jpg"></img>
                <p style={{padding: '15px 10px 10px 0px'}}>Copyright 2021</p>
            </Box>
        </Box>
    )
}
export default Home
