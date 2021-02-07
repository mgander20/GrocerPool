import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

// CSS
import '../styles/register.css';

import { AppContext } from '../State';

const useStyles = makeStyles((theme) => ({
  leftBox: {
    backgroundColor: '#20393A',
    width: '50%',
    height: '100vh',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
  },
}));

function RegisterPage({ history }) {
  const { state, dispatch } = useContext(AppContext);
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password2, setPassword2] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [postalCode, setPostalCode] = useState();
  const [address, setAddress] = useState();

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  const doRegistration = () => {
    const user = {
      firstName,
      lastName,
      password,
      email,
      phoneNumber,
      address,
      city,
      province,
      postalCode,
    };

    try {
      const registerRes = axios.post(
        `${process.env.REACT_APP_API}/api/users/register`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      localStorage.setItem('uOttawaHackUser', email);
      history.push('/');
      dispatch({
        type: 'doLogin',
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validInput = !(
    firstName &&
    lastName &&
    email &&
    password === password2
  );

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="row">
        <Box className={[classes.leftBox, 'leftBox']}></Box>

        <Box className={classes.rightBox}>
          <Link to="/login" variant="contained">
            Sign In Instead
          </Link>
          <h1>Join the Community</h1>
          <TextField
            required
            label="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            required
            label="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <TextField
            required
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            required
            type="password"
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            required
            type="password"
            label="Re-type password"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <TextField
            label="Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <TextField
            label="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <TextField
            label="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            label="Province"
            onChange={(e) => {
              setProvince(e.target.value);
            }}
          />

          <TextField
            label="Postal Code"
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
          <Button disabled={validInput} type="default" onClick={doRegistration}>
            Submit
          </Button>
        </Box>
        {error ? (
          <Box>
            <h5>Registration Failed</h5>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}

export default RegisterPage;
