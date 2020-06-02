import { EDIT_BOOK } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case EDIT_BOOK:
      return state;
    default:
      return state;
  }
}
