import { Record } from 'immutable';

export const Movie = new Record({
  id: '',
  title: '',
  description: '',
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: 0,
  video: false,
  vote_average: 0,
  vote_count: 0,
});
