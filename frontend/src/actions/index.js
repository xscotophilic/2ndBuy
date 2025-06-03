import api from '../api';

import {
  FETCH_USER,
  FETCH_BOOKS,
  FETCH_MYBOOKS,
  ADD_BOOKS,
  DELETE_BOOK,
  FETCH_BOOK_BY_ID,
  EDIT_BOOK,
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await api.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBooks = () => async (dispatch) => {
  const res = await api.get('/api/books');
  dispatch({ type: FETCH_BOOKS, payload: res.data });
};

export const fetchMyBooks = () => async (dispatch) => {
  try {
    const res = await api.get('/api/mybooks');
    dispatch({ type: FETCH_MYBOOKS, payload: res.data });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      // No books found, dispatch empty array
      dispatch({ type: FETCH_MYBOOKS, payload: [] });
    } else {
      throw err;
    }
  }
};

export const fetchBookById = (id) => async (dispatch) => {
  const res = await api.get(`/api/mybooks/${id}`);
  dispatch({ type: FETCH_BOOK_BY_ID, payload: res.data });
};

export const deleteBook = (id) => async (dispatch) => {
  await api.delete(`/api/mybooks/${id}`);
  dispatch({ type: DELETE_BOOK });
};

export const editBook = ({
  id,
  name,
  email,
  price,
  picurl,
  location,
}) => async (dispatch) => {
  const res = await api.patch(`/api/mybooks/${id}`,
    { name, email, price, picurl, location }
  );
  dispatch({ type: EDIT_BOOK, payload: res.data });
};

export const addBook = ({ name, email, price, picurl, location }) => async (
  dispatch
) => {
  const res = await api.post('/api/mybooks', {
    name,
    email,
    price,
    picurl,
    location,
  });
  dispatch({ type: ADD_BOOKS, payload: res.data });
};
