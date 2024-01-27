import styles from "../styles/blog.module.css";
import author from "../images/author.png";
import Latestpost from "../components/Latestpost";
import data from "../data/blogs.json";
import searchIcon from "../images/search.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const results = search
    ? data.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    : data.blogs;

  // setSearch(results);

  return (
    <>
      <div className="container mx-auto mb-5">
        <div className={`${styles.blog}`}>
          <div className={`${styles.title}`}>Blogs</div>
          <div className={`${styles.bread_crumbs}`}>
            <span>
              <Link to={"/"}> Home </Link>
            </span>
            <span>/ </span>

            <span>Blogs</span>
          </div>
        </div>
        <form className="d-flex mt-3 mx-auto" onSubmit={handleSubmit}>
          <div className={`input-group p-2 mx-auto ${styles.search_container}`}>
            <input
              className={`${styles.search_placeholder}form-control border-0 px-2`}
              type="search"
              // value={search}
              onChange={handleInputChange}
              placeholder=" Search..."
              aria-label="Search"
            />
            <span className="input-group-text bg-white border border-1 border-white">
              <img src={searchIcon} alt="" className="" />
            </span>
          </div>
        </form>

        <div className={`${styles.home_pic} img-fluid mx-auto d-none`}>
          <div className={`${styles.blog_title}`}>
            <div className={`${styles.badge} mb-3`}>
              <span>Technology</span>
            </div>
            The Impact of Technology on the Workplace: How Technology is
            Changing
            <div className={`${styles.author} mt-3`}>
              <img src={author} alt="" />
              <span className={`${styles.authors_name} px-2 `}>
                solomon Paul
              </span>
              <span className={`${styles.date_posted} px-3`}>
                20th january 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      <Latestpost
        blogs={results}
        title={search ? "Search results" : "All Posts"}
      />
      {results.length === 0 && (
        <div className="text-center mb-5 ">No results found</div>
      )}
    </>
  );
};

export default Blogs;
