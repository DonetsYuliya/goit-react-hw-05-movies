import css from './list-movie-items.module.css';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListMovieItems = ({ movies }) => {
  const location = useLocation();

  const items = movies.map(({ id, title }) => {
    return (
      <li className={css.item} key={id}>
        <Link
          className={css.link}
          id={id}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          {title}
        </Link>
      </li>
    );
  });

  return <ul>{items}</ul>;
};

export default memo(ListMovieItems);

ListMovieItems.defaultProps = {
  movies: [],
};

ListMovieItems.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
