import { Box, Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
function ConfirmPage() {
    return (
        <Container>
            <Box p={6} color="white" textAlign="center" style={{ backgroundColor: "rgba(44,174,159,09)",}}>
                <h1>Your All Set</h1>
                <img style={{width: "400px", borderRadius: "10px"}} src="https://i.imgur.com/NhoPfee.png"></img>
                <br></br>
                <Link to="/">
                    Go Back
                </Link>
            </Box>
        </Container>
    )
}

export default ConfirmPage
