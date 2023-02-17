import {
  useParams,
  Link,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { getMoviesById } from 'services/api';
import css from './pages.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const movieInformation = async () => {
      try {
        const { data } = await getMoviesById(id);
        setMovieDetails(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    movieInformation();
  }, [id]);

  const { poster_path, release_date, vote_average, title, overview, genres } =
    movieDetails;

  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <div className={css.container}>
      <Link className={css.link} to={from}>
        <HiArrowLeft size="24" />
        Go back
      </Link>
      <div className={css.movieDetailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="250"
        />
        <div>
          <h2>
            {title} ({release_date && release_date.slice(0, 4)})
          </h2>
          <p>User score: {Number.parseInt(vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres && genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <div className={css.menuDetails}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              className={css.link}
              to={`/movies/${id}/cast`}
              state={{ from }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={css.link}
              to={`/movies/${id}/reviews`}
              state={{ from }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
