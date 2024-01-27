import styles from "../styles/navbar.module.css";
import brandimg from "../images/Logo (2).svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm mb-5">
        <div className="container px-5 ">
          <a className="navbar-brand" href="#">
            <img src={brandimg} alt="" />
          </a>
          <button
            className={`navbar-toggler ${styles.nav_toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`${styles.nav_list} navbar-nav me-auto mb-2 mb-lg-0 mx-auto`}
            >
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                  style={({ isActive }) => ({
                    color: isActive ? "#00bcd4" : null,
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/blogs"}
                  style={({ isActive }) => ({
                    color: isActive ? "#00bcd4" : null,
                  })}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
