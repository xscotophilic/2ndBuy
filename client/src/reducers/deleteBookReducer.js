import { DELETE_BOOK } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case DELETE_BOOK:
      return state;
    default:
      return state;
  }
}
