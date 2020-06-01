import { ADD_BOOKS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
