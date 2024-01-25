import styles from "../styles/blog.module.css";
import author from "../images/author.png";
import Latestpost from "../components/Latestpost";
import data from "../data/blogs.json";
import { Link } from "react-router-dom";

const Blogs = () => {
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
        <div className={`${styles.home_pic} img-fluid mx-auto`}>
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
      <Latestpost blogs={data.blogs} title="All Posts" />
    </>
  );
};

export default Blogs;
