import axios from 'axios';
const API_KEY = 'b77b3068ddcc2ce3ea23003328032394';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

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
  console.log(data);
  return data;
};
