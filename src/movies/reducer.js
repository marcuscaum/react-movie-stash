import Immutable from 'immutable';
import { ADD_MOVIE } from '../constants/action-types';

export default (state = new Immutable.List(), action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({}, state, {
        title: action.payload.title,
        description: action.payload.description,
      });
    default:
      return {};
  }
};
