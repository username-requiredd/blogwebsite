import styles from "../styles/latestpost.module.css";
import author from "../images/author.png";
import { Link } from "react-router-dom";

const Latestpost = ({ blogs: data, title }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className={`${styles.latest_post_section} `}>
        <div className="container">
          <div className={`${styles.heading} pb-5`}>{title}</div>

          <div className="row">
            {data.map(
              ({ image, category, title, author, date, authorimg, id }) => (
                <div className="col-sm-8 mb-4 col-lg-4 mx-auto" key={id}>
                  <Link to={`/blogs/${id}`} onClick={scrollToTop}>
                    <div className={`${styles.latest_blogs}`}>
                      <div className="img">
                        <img
                          src={image}
                          style={{
                            width: "300px",
                            height: "200px",
                            borderRadius: "10px",
                          }}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className={`${styles.blog_info}`}>
                        <div className={`${styles.blog_category}`}>
                          {category}
                        </div>
                        <h4>{title}</h4>
                        <div className={`${styles.author}`}>
                          <Link to={`/authors/${id}`}>
                            <div className="author mt-4">
                              <img
                                src={authorimg}
                                alt=""
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "80px",
                                }}
                              />
                              <span className={`${styles.author_name} px-2`}>
                                {author}
                              </span>
                              <span className={`${styles.date_posted}`}>
                                {" "}
                                {date}
                              </span>
                            </div>{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Latestpost;
