import React, { useState, useEffect } from 'react';
import { Box, Container, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { NavbarLoggedIn } from '../components/Navbar';
import { ItemGrocery } from '../components/ItemGrocery';
import { getAll } from '../services/grocery';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 230, 237, 0.8)',
  },
  mainBox: {
    backgroundColor: 'rgba(44,174,159,09)',
    height: '20vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  categoryImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '25px 25px 0px 25px',
    cursor: 'pointer',
  },
  btnWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  leftSideBody: {
    maxWidth: '80%',
    minWidth: '80%',
  },
  rightSideBody: {
    maxWidth: '20%',
  },
  btn2: {
    backgroundColor: 'rgba(44,174,159,09)',
    color: 'white',
    margin: '5px 10px',
    minWidth: '100px',
  },
}));

function AddGrocery() {

  // States
  const [groceries, setGroceries] = useState([])


  // useEffects

  // On Mount Effect
  useEffect(() => {
    getAll().then(response => {
      const values = Object.values(response.data)
      setGroceries(values)
    })
  }, [])

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <NavbarLoggedIn />
      <CategoryBox />
      <Box display="flex" flexDirection="row">
        <Container className={classes.leftSideBody} maxWidth="lg">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {groceries.map((item) => (
                <ItemGrocery key={item} item={item} />
              ))}
            </Grid>
          </Grid>
        </Container>
        <hr></hr>
        <Container className={classes.rightSideBody} maxWidth="lg">
          <Grid item xs={12}>
            <h1 className="header-main">Your Cart</h1>
            <ul>
              {[1, 2, 3, 4, 5].map((item) => (
                <li>Hi</li>
              ))}
            </ul>
          </Grid>
          <Box>
            <Button variant="" className={classes.btn2}>
              Submit List
            </Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

const IMG_CATEGORY_PRODUCE =
  'https://i.pinimg.com/originals/fb/71/58/fb7158daf1b7dc968ef08f22713aa614.jpg';

function CategoryBox() {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Box
        alignItems="center"
        textAlign="center"
        color="white"
        fontWeight="700"
      >
        <img className={classes.categoryImg} src={IMG_CATEGORY_PRODUCE}></img>
        <p>Produce</p>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        color="white"
        fontWeight="700"
      >
        <img className={classes.categoryImg} src={IMG_CATEGORY_PRODUCE}></img>
        <p>Produce</p>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        color="white"
        fontWeight="700"
      >
        <img className={classes.categoryImg} src={IMG_CATEGORY_PRODUCE}></img>
        <p>Produce</p>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        color="white"
        fontWeight="700"
      >
        <img className={classes.categoryImg} src={IMG_CATEGORY_PRODUCE}></img>
        <p>Produce</p>
      </Box>
    </Box>
  );
}

export default AddGrocery;
