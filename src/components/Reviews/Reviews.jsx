import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPIService from 'services/moviesAPIService';

const moviesAPI = new MoviesAPIService();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await moviesAPI.getMovieReviews(movieId);
        setReviews(data.results);
      } catch (e) {
        console.log('Error fetching movie reviews:', e);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>There is no reviews yet.</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
