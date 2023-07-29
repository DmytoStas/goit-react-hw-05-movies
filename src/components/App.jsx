import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Layout from './Layout';
import MovieDetails from 'pages/MoviesDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="movies" element={<Movies />} />
      </Routes>
    </>
  );
};
