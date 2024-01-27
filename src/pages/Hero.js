import styles from "../styles/home.module.css";
import author from "../images/author.png";
import Latestpost from "../components/Latestpost";
import data from "../data/blogs.json";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const homePageBlogs = data.blogs.filter((blog) => blog.id < 9);
  return (
    <>
      <div className="container position-relative ">
        {/* <form className="d-flex" onSubmit={handleSubmit}>
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
        </form> */}

        <div className={`${styles.hero_img} img-fluid mx-auto`}></div>
        <div className={`${styles.hero_modal}`}>
          <div className={`${styles.hero_category}`}>Technology</div>
          <div className={`${styles.hero_headding} `}>
            <h4>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h4>
            <div className="author mt-4">
              <img src={author} alt="" />
              <span className={`${styles.author_name} px-2`}>
                Jason Francisco
              </span>
              <span className={`${styles.date_posted}`}>
                {" "}
                January 18th 2024
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className={`${styles.latest_container}`}>
        <div className={`${styles.adds} container mt-5 mb-5`}>
          <div className={`${styles.place_adds}`}>Advertisements</div>
          <div className={`${styles.place_adds_heading}`}>
            You can place ads
          </div>
          <div className={`${styles.place_adds_size}`}>750X100</div>
        </div>
        <Latestpost blogs={homePageBlogs} title="Latest Posts" />
        <div className={`${styles.more_blogs}`}>
          <Link to={"/blogs"} onClick={scrollToTop}>
            <button className="btn">View All Posts</button>
          </Link>
        </div>
      </div>
      <div className={`${styles.adds} container mt-5 mb-5`}>
        <div className={`${styles.place_adds}`}>Advertisements</div>
        <div className={`${styles.place_adds_heading}`}>You can place ads</div>
        <div className={`${styles.place_adds_size}`}>750X100</div>
      </div>
    </>
  );
};

export default Home;
