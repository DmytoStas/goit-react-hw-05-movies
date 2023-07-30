import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const QueryMoviesList = ({ movies, locationState }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title, name } = movie;
        return (
          <li key={id}>
            <Link to={`${id}`} state={{ from: locationState }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

QueryMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  locationState: PropTypes.object.isRequired,
};

export default QueryMoviesList;
