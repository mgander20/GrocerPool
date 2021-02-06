import React from 'react'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '40px 100px',
        backgroundColor: 'rgba(223, 230, 237, 0.8)',
        height: 290,
        width: 200,
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: "300"
    },
    img: {
        width: "200px"
    }
  }));
function ItemCard({ item }) {
    const classes = useStyles();

    return (
        <Grid key={item} item>
            <Paper className={classes.paper}>
                <img className={classes.img} src={item.src} alt={item.src}></img>
                <p>{ item.title }</p>
            </Paper>
        </Grid>
    )
}

export { ItemCard }
