import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Hooks
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function NavbarPublic() {
    return (
        <AppBar color="colorSecondary" position="static">
            <Toolbar>
                <Typography variant="h6">
                    LOGO
                </Typography>
                <Button color="dark">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

function NavbarLoggedIn() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    LOGO
                </Typography>

                <div>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                    <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    // onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                </div>
                <div>
                    <Button color="dark">Logout</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export { NavbarPublic, NavbarLoggedIn }
