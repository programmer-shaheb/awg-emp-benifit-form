import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './redux/create-store';
import Routes from './Routes';

const history = createBrowserHistory();
const {store, persistor} = createStore(history, window.__INITIAL_STATE__);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes history={history} />
      </PersistGate>
    </Provider>
  );
}

export default App;
