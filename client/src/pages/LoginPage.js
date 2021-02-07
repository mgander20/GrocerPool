import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
//CSS
import '../styles/login.css';

// Modules
import { AppContext } from '../State';

const useStyles = makeStyles((theme) => ({
  mainBox: {},
  leftBox: {
    backgroundColor: '#20393A',
    width: '50%',
    height: '100vh',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: '60px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 100,
  },
}));

function LoginPage({ history }) {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validInput = !(email && password);

  const doLogin = async () => {
    const logInData = { email, password };

    try {
      if (process.env.NODE_ENV === 'production') {
        const host = '/api/users/login';
      } else {
        const host = process.env.REACT_APP_API + '/api/users/login';
      }
      console.log(host);
      const logInRes = await axios.post(host, logInData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (logInRes.data) {
        localStorage.setItem('uOttawaHackUser', email);

        history.push('/');

        dispatch({
          type: 'doLogin',
          currentUser: logInRes.data,
        });
      } else {
        setError(true);
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxWidth="lg">
      <Box
        className={classes.mainBox}
        display="flex"
        flexDirection="row"
        borderRadius="7%"
      >
        <Box className={[classes.leftBox, 'leftBox']}></Box>
        <Box className={classes.rightBox}>
          <Link className={classes.link} to="/register" variant="contained">
            Register Instead
          </Link>
          <h1>Welcome Back!</h1>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            label="Email"
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            label="Password"
          />
          <Button disabled={validInput} onClick={doLogin} type="default">
            Login
          </Button>
          {error ? <h2>WRONG PASSWORD</h2> : null}
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
