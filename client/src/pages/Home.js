import { AppContext } from "../State"
import React, { useContext } from 'react';
import { NavbarLoggedIn } from "../components/Navbar";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';


import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import "../styles/shared.css"
import "../styles/welcome.css"

const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
        height: '20vh',
        border: "1px solid black"
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
    gridList: {
        height: "294px",
        border: "1px solid grey"    
    }
}))

const SHOPPERS_DATA = [ 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } 
]

const ORDER_DATA = [ 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
    { name: "John Doe", time: "30 Minues ago", location: "Toronto", src:"https://i.imgur.com/tLKjtrE.png" } , 
]

function Home() {
    const classes = useStyles();

    const { state, dispatch } = useContext(AppContext)

    return (
        <Container maxWidth="lg">
            <NavbarLoggedIn />
            <div className={classes.banner}></div>

            <Box className={classes.body}>
                <h1 className="header-main">Upcoming shoppers</h1>
                <GridList className={classes.gridList} cols={2.5}>
                    <Table className={classes.table}>                    
                        {
                            SHOPPERS_DATA.map(item => (<ProfileCard />))
                        }
                    </Table>
                </GridList>
            </Box>
            
            <Box className={classes.body}>
                <h1 className="header-main">Upcoming Orders</h1>
                <GridList className={classes.gridList} cols={2.5}>
                    <Table className={classes.table}>                    
                        {
                            [1,2,3,4,5,6,7,8].map(item => (<ProfileCard />))
                        }
                    </Table>
                </GridList>
            </Box>

        </Container>
    )
}

function ProfileCard() {
    const classes = useStyles();

    return(
        <Box className={classes.cardBody}>
            <img className="profile-img" src="https://i.imgur.com/tLKjtrE.png"></img>
            <p className="header-two">John Doe</p>
            <p className="body-text-two">30 Minutes</p>
            <p className="body-text-three">Toronto</p>
        </Box>
    )
}

export default Home
