import { combineReducers } from 'redux';
import { createStore } from '@reduxjs/toolkit';
import globalReducer from './global';

const store = createStore(
  combineReducers({
    global: globalReducer,
  }),
);

export default store;
