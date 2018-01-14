import { Record } from 'immutable';
import uuidv1 from 'uuid';

export const Movie = new Record({
  id: uuidv1(),
  title: '',
  description: '',
});
