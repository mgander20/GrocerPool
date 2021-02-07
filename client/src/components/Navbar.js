import React, { useContext } from 'react';
import { AppContext } from '../State';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// Hooks

// CSS
import '../styles/shared.css';
import '../styles/welcome.css';
const logoutClick = () => {
  localStorage.removeItem('uOttawaHackUser');
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 100px',
    backgroundColor: 'rgba(223, 230, 237, 0.8)',
  },
  btn: {
    backgroundColor: 'rgba(44,174,159,09)',
    color: 'white',
    fontSize: '20px',
  },
  btn2: {
    backgroundColor: 'rgba(44,174,159,09)',
    color: 'white',
    margin: '1px 10px',
    minWidth: '100px',
  },
  btn3: {
    margin: '1px 10px',
    minWidth: '100px',
    borderBottom: '1px solid black',
  },
  bodyTwo: {
    padding: '80px 0px 0px 0px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

function NavbarLoggedIn() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const backendCall = `${process.env.BACKEND_HOST}/api/users/logout`;
  return (
    <Box m={3} display="flex" justifyContent="space-between">
      <Link className={classes.link} to="/">
        <h1>{state.appName}</h1>
      </Link>
      <Box m={3}>
        <Link className={classes.link} to="/profile">
          <Button className={classes.btn3}>Profile</Button>
        </Link>
        <Link className={classes.link} to="/chat">
          <Button className={classes.btn3}>Chat</Button>
        </Link>
        <Link className={classes.link} to="/order">
          <Button className={classes.btn2}>Create++</Button>
        </Link>
        <a target="_blank" className={classes.link} href={backendCall}>
          <Button className={classes.btn2} onClick={logoutClick}>
            Logout
          </Button>
        </a>
      </Box>
    </Box>
  );
}

function NavbarLoggedInTwo() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  return (
    <Box m={3} display="flex" justifyContent="space-between">
      <Link className={classes.link} to="/">
        <h1>{state.appName}</h1>
      </Link>
      <Box m={3}>
        <Link className={classes.link} to="/profile">
          <Button className={classes.btn3}>Profile</Button>
        </Link>
        <Link className={classes.link} to="/chat">
          <Button className={classes.btn3}>Chat</Button>
        </Link>
      </Box>
    </Box>
  );
}

export { NavbarLoggedIn, NavbarLoggedInTwo };
