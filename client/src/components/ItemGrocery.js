import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'rgba(223, 230, 237, 1)',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '300',
    margin: '15px 0px',
  },
  img: {
    width: '200px',
    height: '200px',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  quantity: {
    margin: '10px',
  },
}));

const IMG =
  'https://i.pinimg.com/originals/1b/85/de/1b85de38883996f60285d6a8bf266d01.png';

function ItemGrocery({ item }) {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid key={item} item>
      <Paper className={classes.paper}>
        <img className={classes.img} src={item.image} alt={item.image}></img>
        {
          console.log(" -->", item)
        }
        <p>{item.name}</p>
        {/* <p className="body-text-three">Product Description</p> */}
        {/* <span>$10.0</span> */}

        <Box display="flex" flexDirection="column">
          <TextField
            className={classes.quantity}
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button>Add to Cart</Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export { ItemGrocery };
