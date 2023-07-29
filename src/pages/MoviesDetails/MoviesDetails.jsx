import { Link } from 'react-router-dom';
// import MovieCard from '../../components/MovieCard';

const MovieDetails = () => {
  return (
    <>
      {/* <MovieCard /> */}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
