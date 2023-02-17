import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByIdReviews } from 'services/api';

const Reviews = () => {
  const [useReviews, setUseReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await getMoviesByIdReviews(id);
        setUseReviews(results);
      } catch (error) {
        throw new Error(error);
      }
    };
    getReviews();
  }, [id]);

  const reviewsInfo = useReviews.map(({ author, content, id: key }) => {
    return (
      <li key={key}>
        <h4>Author: {author}</h4>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <>
      {useReviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>{reviewsInfo}</ul>
      )}
    </>
  );
};

export default Reviews;
