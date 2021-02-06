import { AppContext } from "../State"
import React, { useContext } from 'react';
import { NavbarLoggedIn } from "../components/Navbar";

function Home() {
    const { state, dispatch } = useContext(AppContext)
    return (
        <div>
            <NavbarLoggedIn />
            <h1>Home Page</h1>
            Welcome to  { state.appName }
        </div>
    )
}

export default Home
