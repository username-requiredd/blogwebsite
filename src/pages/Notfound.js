import styles from "../styles/notfound.module.css";

import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={`${styles.notfound_container}`}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might be in another universe.</p>
      <Link to={"/"}>Back to Home</Link>
      {/* <img
        src="https://example.com/your-custom-404-image.jpg"
        alt="404 Not Found"
        className="not-found-image"
      /> */}
    </div>
  );
};

export default NotFound;
