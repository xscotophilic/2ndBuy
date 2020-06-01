import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import fetchBooksReducers from './fetchBooksReducers';
import fetchMyBooksReducers from './fetchMyBooksReducer';
import deleteBookReducer from './deleteBookReducer';
import addBookReducer from './addBookReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  books: fetchBooksReducers,
  mybooks: fetchMyBooksReducers,
  addBookReducer: addBookReducer,
  deleteBook: deleteBookReducer,
});
