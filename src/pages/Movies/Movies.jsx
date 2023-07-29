import { Formik, Form, Field } from 'formik';

const Movies = () => {
  const handleSubmit = async (values, actions) => {
    //  await onSubmit(values.query);
    //  actions.resetForm();
    console.log(values);
  };

  return (
    <>
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
    </>
  );
};

export default Movies;
