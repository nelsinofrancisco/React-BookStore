/* eslint-disable import/extensions */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import booksReducer from './Books/Books.js';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
