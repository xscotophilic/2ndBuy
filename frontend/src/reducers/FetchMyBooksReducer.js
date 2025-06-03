import { FETCH_MYBOOKS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MYBOOKS:
      return action.payload;
    default:
      return state;
  }
}
