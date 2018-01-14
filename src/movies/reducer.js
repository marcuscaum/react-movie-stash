import { List } from 'immutable';
import { ADD_MOVIE } from '../constants/action-types';
import { Movie } from './model';

export const reducer = (state = List([]), action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE:
      return state.push(new Movie(payload));
    default:
      return state;
  }
};
