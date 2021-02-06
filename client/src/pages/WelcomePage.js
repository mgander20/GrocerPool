import React from 'react'
import { NavbarPublic } from '../components/Navbar'

// CSS


function WelcomePage() {
    return (
        <div>
            <NavbarPublic />
            <h1>Welcome Page</h1>

            <p>Can't go out to do your Grocery ? </p>
            <b>Send a partner</b>
            <br></br>
            <p>Going out to do grocery ?</p>
            <b>Pick up stuff for your friend</b>
            <br></br>

            <h5>Earn Points ?</h5>
        </div>
    )
}

export default WelcomePage
