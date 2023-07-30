import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import MovieCard from '../../components/MovieCard';
import MoviesAPIService from 'services/moviesAPIService';

const moviesAPI = new MoviesAPIService();

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const firstMountRef = useRef(false);

  useEffect(() => {
    console.log(firstMountRef);
    const fetchMovieDetails = async () => {
      try {
        const data = await moviesAPI.getMovieDetails(movieId);
        setDetails(data);
      } catch (e) {
        console.log('Error fetching movie details:', e);
      }
    };

    if (firstMountRef.current) {
      fetchMovieDetails();
      return;
    }

    firstMountRef.current = true;
  }, [movieId, firstMountRef]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {firstMountRef.current && <MovieCard movieDetails={details} />}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
