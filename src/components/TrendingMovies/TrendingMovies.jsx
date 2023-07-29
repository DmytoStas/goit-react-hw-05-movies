import PropTypes from 'prop-types';

const { Link } = require('react-router-dom');

const TrendingMoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => {
          const { id, title, name } = movie;
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title || name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};

export default TrendingMoviesList;
