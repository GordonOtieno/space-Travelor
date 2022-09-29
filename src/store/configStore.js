import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './misions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
