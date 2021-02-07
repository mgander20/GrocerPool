import './App.css';
import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

// Custom Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';

// Components

// Modules
import { AppContext } from './State';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import AddGrocery from './pages/AddGrocery';
import OrderPage from './pages/OrderPage';
import AddTripPage from './pages/AddTripPage';

const AuthRoutes = () => (
  <Switch>
    <Route component={WelcomePage} path="/" exact />
    <Route component={LoginPage} path="/login" />
    <Route component={RegisterPage} path="/register" />
  </Switch>
);

const AppRoutes = () => (
  <Switch>
    <Route component={Home} path="/ho" exact />
    <Route component={OrderPage} path="/order" />
    <Route component={ProfilePage} path="/profile" />
    <Route component={ChatPage} path="/chat" />
    <Route component={AddGrocery} path="/add-grocery" />
    <Route component={AddTripPage} path="/add-trip" />
  </Switch>
);

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <Router>{state.user ? <AppRoutes /> : <AuthRoutes />}</Router>
    </>
  );
}

export default App;
