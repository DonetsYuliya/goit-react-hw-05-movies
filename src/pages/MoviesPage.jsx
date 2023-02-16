import { useState, useEffect } from 'react';
import { getMoviesByName } from 'services/api';
import ListMovieItems from 'components/ListMovieItems/ListMovieItems';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './pages.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const onSearch = ({ search }) => {
    setSearch(search);
    setMovies([]);
  };

  useEffect(() => {
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
  }, [search]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSearch} />
      {search && <ListMovieItems movies={movies} />}
    </div>
  );
};

export default MoviesPage;
