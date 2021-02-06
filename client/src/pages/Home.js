import { AppContext } from "../State"
import React, { useContext } from 'react';

function Home() {
    const { state, dispatch } = useContext(AppContext)
    return (
        <div>
            <h1>Home Page</h1>
            Welcome to  { state.appName }
        </div>
    )
}

export default Home
