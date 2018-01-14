import TmdbClient from 'themoviedbclient';

const tmdb = new TmdbClient(process.env.REACT_APP_MOVIE_API);

console.log(tmdb.getCurrentSettings());
