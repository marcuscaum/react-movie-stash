import TmdbClient from 'themoviedbclient';

const tmdb = new TmdbClient(process.env.REACT_APP_MOVIE_API);

export const findMovie = async (params = {}) => tmdb.call('/search/movie', params);

tmdb.call('/movie/550', {});
tmdb.call('/search/movie', { query: 'Jack+Reacher' });
console.log(tmdb.getCurrentSettings());
