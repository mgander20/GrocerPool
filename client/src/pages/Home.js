import { AppContext } from "../State"
import React, { useContext } from 'react';
import { NavbarLoggedIn } from "../components/Navbar";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Home() {
    const { state, dispatch } = useContext(AppContext)
    return (
        <Container maxWidth="lg">
            <h1>Home Page</h1>
            Welcome to  { state.appName }
        </Container>
    )
}

export default Home
