import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesAPIService from 'services/moviesAPIService';
import QueryMoviesList from 'components/QueryMoviesList';

const moviesAPI = new MoviesAPIService();

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setQueryMovies([]);
      return;
    }

    const fetchQuery = async () => {
      try {
        const data = await moviesAPI.getQuery(query);

        if (data.results.length === 0) {
          toast.error('Invalid search value! Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        }

        setQueryMovies(data.results);
      } catch (e) {
        console.log('Error fetching movies query:', e);
      }
    };

    fetchQuery();
  }, [query]);

  const handleSubmit = async (values, actions) => {
    if (values.query === '') {
      toast.error('Type what you are searching for!', {
        position: toast.POSITION.TOP_RIGHT,
      });

      return setSearchParams({});
    }
    setSearchParams({ query: values.query });
    actions.resetForm();
  };

  return (
    <>
      <ToastContainer transition={Bounce} />
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </label>

          <button type="submit">
            <span className="button-label">Search</span>
          </button>
        </Form>
      </Formik>
      {queryMovies.length >= 1 ? (
        <QueryMoviesList movies={queryMovies} locationState={location} />
      ) : (
        <p>Start searching for movies</p>
      )}
    </>
  );
};

export default Movies;
