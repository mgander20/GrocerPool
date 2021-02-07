
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

// Images
import Image from '../styles/img/order-confirm.png';

// Modules
import { AppContext } from '../State';
import { NavbarLoggedIn } from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
    mainBox: {
      backgroundColor:'white',
      height: '100vh',
      textAlign: 'center',
    },
    subBox: {
        backgroundColor: 'white',
        margin: '20vh 0',
        height: '280px',
        width: '450px',
        padding: '10px',
        borderRadius: '10px',
      },
  }));
  
function ConfirmOrderPage({ history }) {
    const classes = useStyles();
  
    return (
      <Container maxWidth="lg">
        <NavbarLoggedIn />
        <Box
          className={classes.mainBox}
          display="flex"
          flexDirection="row"
          borderRadius="7%"
          justifyContent="center"
          justifyItems="center"
        >
            <img
            src={Image}
            //className={classes.banner}
            ></img>
            <Box className={classes.subBox}>
          <h1 className="header-main">Your Grocery Order Request has been Sent!</h1>
          <p className="body-text-four"> Keep an eye out for a confirmation that a volunteer has accepted your grocery trip!</p>
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default ConfirmOrderPage;
  