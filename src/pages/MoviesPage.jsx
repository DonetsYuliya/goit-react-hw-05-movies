import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/api';
import ListMovieItems from 'components/ListMovieItems/ListMovieItems';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './pages.module.css';
import PropTypes from 'prop-types';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();

  const onSearch = ({ search }) => {
    setSearch(search);
  };

  useEffect(() => {
    if (!search) setSearch(searchParams.get('query'));
    if (!search) return;

    const getMovies = async () => {
      try {
        const response = await getMoviesByName(search);
        setMovies(response);
      } catch (error) {
        throw new Error(error);
      }
    };
    getMovies();
  }, [search, searchParams]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSearch} />
      <ListMovieItems movies={movies} />
    </div>
  );
};

export default MoviesPage;

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  onSearch: PropTypes.func,
};
