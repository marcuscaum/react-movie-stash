
import { ADD_MOVIE } from '../constants/action-types';

export const createMovie = payload => ({
  type: ADD_MOVIE,
  payload: {
    title: payload.title,
    description: payload.description,
  },
});
