import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// material Ui Shit
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

//CSS
import '../styles/shared.css';

// Modules
import { AppContext } from '../State';
import { NavbarLoggedIn } from '../components/Navbar';
import { ORDER_DATA } from '../util/Consts';
import { Table } from '@material-ui/core';

// COmponents
import { ProfileCardTwo } from '../pages/Home';

const useStyles = makeStyles((theme) => ({
  banner: {
    width: '600px',
    padding: '25px',
    alignSelf: 'left',
  },
  body: {
    margin: '60px 0px',
  },
  gridList: {
    height: '319px',
    border: '1px solid grey',
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: undefined,
  },
  mainBox: {
    backgroundColor: 'rgba(44,174,159,0.1)',
    height: '70vh',
    textAlign: 'center',
    justifyItems: 'center',
  },
  subBox: {
    backgroundColor: 'white',
    margin: '300px 0px',
    height: '280px',
    width: '450px',
    padding: '10px',
    borderRadius: '10px',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: '60px',
  },
  btn2: {
    backgroundColor: 'rgba(44,174,159,09)',
    color: 'white',
    margin: '5px 10px',
    minWidth: '100px',
  },
  inputGroup: {
    color: 'white',
    marginLeft: '300px',
    backgroundColor: 'rgba(231, 219, 190, 0.42)',
    padding: '50px',
    margin: '20px',
    borderRadius: '30px',
  },
  input: {
    margin: 5,
    borderColor: 'white',
  },
}));

function AddTripPage() {
  const classes = useStyles();
  const [tripConfirmed, setTripConfirmed] = useState(false);

  const [storeName, setStoreName] = useState();
  const [storeLocation, setStoreLocation] = useState();
  const [storeDate, setDate] = useState();
  const [storeTime, setTime] = useState();

  const handleTripConfirm = () => {
    const tripPayload = {
      storeName,
      storeLocation,
      storeDate,
      storeTime,
    };

    //
    setTripConfirmed(true);
  };

  const validRequest = !(storeName && storeLocation && storeDate && storeTime);

  return (
    <Container maxWidth="lg">
      <NavbarLoggedIn />
      {tripConfirmed ? (
        <SimilarRequests
          storeName={storeName}
          storeLocation={storeLocation}
          storeDate={storeDate}
          storeTime={storeTime}
        />
      ) : (
        <Box
          p={5}
          className={classes.mainBox}
          display="flex"
          flexDirection="column"
          borderRadius="7%"
          textAlign="center"
        >
          <h1 className="header-main"></h1>
          <Box
            className={classes.inputGroup}
            display="flex"
            flexDirection="column"
            maxWidth={500}
          >
            <h1 className="header-main">Add your trip</h1>
            <TextField
              onChange={(e) => {
                setStoreName(e.target.value);
              }}
              className={classes.input}
              label="Store Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setStoreLocation(e.target.value);
              }}
              className={classes.input}
              label="Store Location"
              variant="outlined"
            />
            <TextField
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className={classes.input}
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setTime(e.target.value);
              }}
              type="time"
              className={classes.input}
              variant="outlined"
            />
            <Button
              disabled={validRequest}
              onClick={handleTripConfirm}
              className={classes.btn2}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
}

function SimilarRequests({ storeTime, storeName, storeLocation, storeDate }) {
  const classes = useStyles();

  return (
    <Box className={classes.body}>
      <Box>
        <h1 className="header-main">Post Successful</h1>
        <p className="body-text-four">Your going to </p>
        <span className="header-sub">
          <b>{storeName}</b>
        </span>
        <span className="header-sub">
          <b>at {storeTime}</b>
        </span>
        <span className="header-sub">
          <b>on {storeDate}</b>
        </span>
        <img
          className={classes.banner}
          src="https://i.imgur.com/rAGlTtz.png"
        ></img>
      </Box>
      <h1 className="header-main">Requested Orders</h1>
      <GridList className={classes.gridList} cols={2.5}>
        <Table className={classes.table}>
          {ORDER_DATA.map((item) => (
            <ProfileCardTwo />
          ))}
        </Table>
      </GridList>
    </Box>
  );
}

export default AddTripPage;
