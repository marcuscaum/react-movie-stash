import Immutable, { Map } from 'immutable';
import { ADD_MOVIE, SET_MOVIES_LIST } from '../constants/action-types';
import { Movie } from './model';

const initialState = Immutable.fromJS({
  list: new Map([]),
});

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE:
      return state.push(new Movie(payload));
    case SET_MOVIES_LIST: {
      let moviesList = Map([]);
      if (payload.results) {
        const moviesRecord = payload.results.map(movie => new Movie(movie));
        moviesList = Map({ ...moviesRecord });
      }
      return state.set('list', moviesList);
    }
    default:
      return state;
  }
};
