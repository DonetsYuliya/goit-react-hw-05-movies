import axios from 'axios';
const API_KEY = 'b77b3068ddcc2ce3ea23003328032394';

const instans = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    page: 1,
  },
});

export const getTrendingFilm = async () => {
  const { data } = await instans('/trending/movie/day');
  return data.results;
};

export const getMoviesByName = async query => {
  const { data } = await instans('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMoviesById = id => {
  const data = instans(`/movie/${id}`);
  return data;
};

export const getMoviesByIdCast = id => {
  const data = instans(`/movie/${id}/credits`);
  return data;
};

export const getMoviesByIdReviews = id => {
  const data = instans(`/movie/${id}/reviews`);
  return data;
};
