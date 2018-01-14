
import { ADD_MOVIE, SET_MOVIES_LIST } from '../constants/action-types';

export const createMovie = payload => ({
  type: ADD_MOVIE,
  payload: {
    title: payload.title,
    description: payload.description,
  },
});

export const setMoviesList = payload => ({
  type: SET_MOVIES_LIST,
  payload,
});
