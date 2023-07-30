import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import MovieCard from '../../components/MovieCard';
import MoviesAPIService from 'services/moviesAPIService';
import {
  AddInfoListWrapp,
  AdditionalInfo,
  StyledLink,
} from './MovieDetails.styled';

const moviesAPI = new MoviesAPIService();

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const firstMountRef = useRef(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await moviesAPI.getMovieDetails(movieId);
        setDetails(data);
      } catch (e) {
        console.log('Error fetching movie details:', e);
      }
    };

    fetchMovieDetails();

    firstMountRef.current = true;
  }, [movieId]);

  return (
    <>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      {firstMountRef.current && <MovieCard movieDetails={details} />}
      <AdditionalInfo>Additional information</AdditionalInfo>
      <AddInfoListWrapp>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AddInfoListWrapp>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
