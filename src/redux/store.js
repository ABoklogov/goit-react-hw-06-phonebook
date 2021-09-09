import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: combineReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
