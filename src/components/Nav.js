import styles from "../styles/navbar.module.css";
import brandimg from "../images/Logo (2).svg";
import searchIcon from "../images/search.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import data from "../data/blogs.json";
import Latestpost from "./Latestpost";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = search.toLowerCase();
    const result = data.blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchValue) ||
        blog.category.toLowerCase().includes(searchValue)
    );
    if (result.length === 0) {
      console.log("no matching result");
    }

    console.log(result);
    console.log(search);
  };

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
                  to={"blog"}
                  style={({ isActive }) => ({
                    color: isActive ? "#00bcd4" : null,
                  })}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <div className={`input-group p-2 ${styles.search_container}`}>
                <input
                  className={`${styles.search_placeholder}form-control border-0 px-2`}
                  type="search"
                  value={search}
                  onChange={handleInputChange}
                  placeholder=" Search..."
                  aria-label="Search"
                />
                <span className="input-group-text bg-white border border-1 border-white">
                  <img src={searchIcon} alt="" className="" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
