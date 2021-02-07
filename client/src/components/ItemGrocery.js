import React from 'react'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgba(223, 230, 237, 1)',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: "300",
        margin: "15px 0px"
    },
    img: {
        width: "200px",
        height: "200px"
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

const IMG= "https://i.pinimg.com/originals/1b/85/de/1b85de38883996f60285d6a8bf266d01.png"

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
                <img className={classes.img} src={IMG} alt={item.src}></img>
                <p>{ item.title }</p>

                <Box display="flex" flexDirection="column">
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Quantity</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={quantity}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>          
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>                        
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                    <Button>Add to Cart</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export { ItemGrocery }




