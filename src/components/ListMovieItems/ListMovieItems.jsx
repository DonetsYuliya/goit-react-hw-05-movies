import css from './list-movie-items.module.css';
import { Link, useLocation } from 'react-router-dom';

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

export default ListMovieItems;
