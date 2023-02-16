import { getTrendingFilm } from 'services/api';
import css from './pages.module.css';
import { useState, useEffect } from 'react';
import ListMovieItems from 'components/ListMovieItems/ListMovieItems';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await getTrendingFilm();
        setMovies(response);
      } catch (error) {
        throw new Error(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <ListMovieItems movies={movies} />
    </div>
  );
};

export default HomePage;
