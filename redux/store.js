import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {rootReducer} from './reducers'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk];
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware, logger)))

export const persistor = persistStore(store);
