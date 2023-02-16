import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/api';
import ListMovieItems from 'components/ListMovieItems/ListMovieItems';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './pages.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();

  const onSearch = ({ search }) => {
    setSearch(search) || setSearch(searchParams.get('query'));
  };

  useEffect(() => {
    if (!search) setSearch(searchParams.get('query'));

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
      {search && <ListMovieItems movies={movies} />}
    </div>
  );
};

export default MoviesPage;
