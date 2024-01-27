import styles from "../styles/blogsingle.module.css";
import Latestpost from "../components/Latestpost";
import { Link, useParams } from "react-router-dom";
import data from "../data/blogs.json";
import ReactMarkdown from "react-markdown";

const Blogsingle = () => {
  const { id } = useParams();
  const { category, author, date, title, authorimg, content } = data.blogs[id];
  console.log(id, data.blogs[id]);

  // Custom components for rendering images
  const components = {
    img: ({ src, alt }) => (
      <img src={src} alt={alt} className="img-fluid rounded mx-auto d-block" />
    ),
  };

  return (
    <>
      <div className="container">
        <div className="container-lg  text-center">
          <div className={`${styles.blog_heading} text-start`}>
            <div className={`${styles.badge}`}>
              <span>{category}</span>
            </div>
            {title}
            <Link to={`/authors/${id}`}>
              <div
                className={`${styles.author}  mb-2 d-flex align-items-center`}
              >
                <img
                  src={authorimg}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "80px",
                  }}
                  className="img-fluid rounded mx-auto d-block"
                />
                <span
                  className={`${styles.authors_name} px-2 align-items-center justify-content-center`}
                >
                  {author}
                </span>
                <span className={`${styles.date_posted} px-2`}>{date}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="container-lg pt-5">
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Blogsingle;
