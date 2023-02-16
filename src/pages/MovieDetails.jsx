import { useParams } from 'react-router-dom';
import { getMoviesById } from 'services/api';
import { useState, useEffect } from 'react';
import css from './pages.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  // const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  useEffect(() => {
    const movieInformation = async () => {
      try {
        const { data } = await getMoviesById(id);
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    movieInformation();
  }, [id]);

  const { poster_path, release_date, vote_average, title, overview, genres } =
    movieDetails;

  return (
    <div className={css.container}>
      <button className={css.button} type="button">
        Go back
      </button>
      <div className={css.movieDetailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
    </div>
  );
};

export default MovieDetails;
