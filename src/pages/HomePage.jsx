import { getTrendingFilm } from 'services/api';
import css from './pages.module.css';
import { useState, useEffect } from 'react';
import ListMovieItems from 'components/ListMovieItems/ListMovieItems';
import PropTypes from 'prop-types';

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

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
