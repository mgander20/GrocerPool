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

  const doLogin = () => {
    if (email === 'test@test.com' && password === 'hack') {
      console.log('SEND THESE TO POST', email, password);

      localStorage.setItem('uOttawaHackUser', email);
      history.push('/');
      dispatch({
        type: 'doLogin',
        currentUser: email,
      });
    } else {
      setError(true);
      setEmail('');
      setPassword('');
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
          <Box>
            <p>Test User: test@test.com & pass: hack</p>
          </Box>
          {error ? <h2>WRONG PASSWORD</h2> : null}
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
