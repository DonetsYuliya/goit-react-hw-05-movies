import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByIdCast } from 'services/api';

const Cast = () => {
  const [useCast, setUseCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await getMoviesByIdCast(id);
        setUseCast(cast);
      } catch (error) {
        throw new Error(error);
      }
    };
    getCast();
  }, [id]);

  const castInfo = useCast.map(({ name, character, profile_path, id: key }) => {
    return (
      <li key={key}>
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
          width="100"
        />
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return (
    <>
      {useCast.length === 0 ? (
        <p>We don't have any cast information for this movie.</p>
      ) : (
        <ul>{castInfo}</ul>
      )}
    </>
  );
};

export default Cast;
