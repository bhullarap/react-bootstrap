import React, { useReducer } from 'react';

import { reducer as userReducer, INITIAL_STATE } from 'contexts/UserContext/reducer';
import { Context } from 'contexts/UserContext';
import Routes from 'components/Routes';
import 'scss/application.scss';

function App() {
  const [userState, userDispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state: userState, dispatch: userDispatch }}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
