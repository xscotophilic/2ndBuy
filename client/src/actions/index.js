import axios from 'axios';

import history from '../history';

import {
  FETCH_USER,
  FETCH_BOOKS,
  FETCH_MYBOOKS,
  ADD_BOOKS,
  DELETE_BOOK,
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBooks = () => async (dispatch) => {
  const res = await axios.get('/api/books');
  dispatch({ type: FETCH_BOOKS, payload: res.data });
};

export const fetchMyBooks = () => async (dispatch) => {
  const res = await axios.get('/api/mybooks');
  dispatch({ type: FETCH_MYBOOKS, payload: res.data });
};

export const deleteBook = (id) => async (dispatch) => {
  await axios.delete(`/api/mybooks/${id}`);
  dispatch({ type: DELETE_BOOK });
  history.push('/dashboard');
};

export const addBook = ({ name, email, price, picurl, location }) => async (
  dispatch
) => {
  const res = await axios.post('/api/mybooks', {
    name,
    email,
    price,
    picurl,
    location,
  });
  dispatch({ type: ADD_BOOKS, payload: res.data });
  history.push('/dashboard');
};
