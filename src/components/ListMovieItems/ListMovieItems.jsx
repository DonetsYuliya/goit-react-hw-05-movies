import css from './list-movie-items.module.css';
import { Link } from 'react-router-dom';

const ListMovieItems = ({ movies }) => {
  const items = movies.map(({ id, title }) => {
    return (
      <li className={css.item} key={id}>
        <Link id={id} to={`/movies/${id}`}>
          {title}
        </Link>
      </li>
    );
  });

  return <ul>{items}</ul>;
};

export default ListMovieItems;
