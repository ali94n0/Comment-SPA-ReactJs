import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>404</h2>
      <p>NotFound Page</p>
      <Link to="/">go to HomePage</Link>
    </>
  );
};

export default NotFound;
