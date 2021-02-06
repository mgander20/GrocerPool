import './App.css';
import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

// Custom Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';

// Components
import { NavbarLoggedIn, NavbarPublic } from "./components/Navbar";

// Modules 
import { AppContext } from "./State"

const AuthRoutes = () => (
  <Switch>
      <Route component={WelcomePage} path="/" exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" exact />
  </Switch>
)

const AppRoutes = () => (
  <Switch>
    <Route component={Home} path="/" exact />
  </Switch>
)

function App() {
  const { state, dispatch } = useContext(AppContext)

  return (
    <>
      <Router>
        {
          state.user ? <AppRoutes />:
          <AuthRoutes /> 
        }
      </Router>
    </>
  );
}

export default App;
