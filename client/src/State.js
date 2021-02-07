import { findAllByDisplayValue } from '@testing-library/react';
import React, { createContext, useReducer } from 'react';

let AppContext = createContext({});

const initialState = {
  appName: 'Grocery Partners',
  user: localStorage.getItem('uOttawaHackUser'),
};

let reducer = (state, action) => {
  switch (action.type) {
    case 'setAppName': {
      return { ...state, appName: action.payload.appName };
    }
    case 'doLogin': {
      return {
        ...state,
        user: action.payload,
      };
    }
  }
};

// Context Provider for Index
function AppContextProvider(props) {
  const appState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(reducer, appState);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
