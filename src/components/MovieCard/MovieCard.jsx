import PropTypes from 'prop-types';

import { MovieCardContainer, MovieCardIMG } from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const {
    title,
    original_title,
    vote_average,
    overview,
    genres,
    poster_path,
    release_date,
  } = movieDetails;

  const pathIMG = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  const scorePercentage = Math.round((vote_average / 10) * 100);
  const movieGenres =
    genres && genres.length >= 1
      ? genres.map(genre => genre.name).join(', ')
      : 'No genres';

  return (
    <MovieCardContainer>
      <MovieCardIMG src={pathIMG} alt={title} />
      <div>
        <h1>
          {title || original_title} ({release_date.slice(0, 4)})
        </h1>
        <p>User Score: {scorePercentage}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </div>
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
