import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AppContextProvider } from "./State";

const RootComponent = () => {
  return (
      <AppContextProvider>
          <App />
      </AppContextProvider>
  )
}


ReactDOM.render( <RootComponent />, document.getElementById('root'));
