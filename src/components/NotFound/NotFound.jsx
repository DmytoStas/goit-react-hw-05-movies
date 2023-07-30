import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>404</p>
      <p>Invalid URL address!</p>
      <Link to="/">Link to Home page</Link>
    </>
  );
};

export default NotFound;
