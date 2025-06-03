import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import fetchBooksReducers from './fetchBooksReducers';
import fetchMyBooksReducers from './FetchMyBooksReducer';
import deleteBookReducer from './DeleteBookReducer';
import addBookReducer from './AddBookReducer';
import fetchBookById from './FetchBookById';
import editBookReducer from './EditBookReducer';

export default combineReducers({
  auth: authReducer,
  books: fetchBooksReducers,
  mybooks: fetchMyBooksReducers,
  addBookReducer: addBookReducer,
  deleteBook: deleteBookReducer,
  fetchBookByIdData: fetchBookById,
  editBookReducerData: editBookReducer,
});
