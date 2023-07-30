import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPIService from 'services/moviesAPIService';

const moviesAPI = new MoviesAPIService();

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await moviesAPI.getMovieCredits(movieId);
        setCast(data.cast);
      } catch (e) {
        console.log('Error fetching movie cast:', e);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(person => {
          const { id, profile_path, name, character } = person;
          const pathIMG = `https://image.tmdb.org/t/p/w154/${profile_path}`;
          return (
            <li key={id}>
              {profile_path && <img src={pathIMG} alt={name} />}
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
