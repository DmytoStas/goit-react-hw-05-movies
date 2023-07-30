import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesAPIService from 'services/moviesAPIService';
import TrendingMoviesList from 'components/TrendingMovies';

const moviesAPI = new MoviesAPIService();

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      const data = await moviesAPI.getTrends();
      setMovies(data.results);
    } catch (e) {
      console.log('Error fetching trends:', e);
    }
  };

  return (
    <>
      <h1> Trending today</h1>
      <TrendingMoviesList movies={movies} locationState={location} />
    </>
  );
};

export default Home;
