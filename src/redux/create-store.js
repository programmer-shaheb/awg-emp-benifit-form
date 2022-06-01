import { createStore as _createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';

import reducers from './index';

function createStore (history, data) {
  const persistConfig = {
    key: 'root',
    storage: storageSession,
    blacklist: ['steps']
  };

  const middleware = [thunk];

  const finalCreateStore = applyMiddleware(...middleware)(_createStore);
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = finalCreateStore(persistedReducer, data);
  const persistor = persistStore(store);

  return { store, persistor };
}

export default createStore;