import styles from "../styles/footer.module.css";
import mail from "../images/mail.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className={`container-fluid  ${styles.section}`}>
        <div className={`${styles.footer_container} mx-auto `}>
          <div className=" row border justify-content-center mx-auto">
            <div className="col-sm-6 col-lg-3 ">
              <div className={`${styles.footer_heading} `}>
                About
                <p>
                  MetaBlog, your digital haven for diverse insights and
                  inspirations. Unleashing the power of words, we curate a
                  spectrum of engaging articles, captivating stories, and
                  practical tips. From tech trends to wellness wisdom, our blog
                  is your go-to source for informative and delightful content.
                  Join our community, where every click is a journey, and every
                  reader is a cherished explorer. Elevate your online experience
                  with quality content and vibrant discussions. Welcome to a
                  world where curiosity meets community
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2  ">
              <div className={`${styles.quick_links} mb-3`}>Quick Links</div>
              <div className={`${styles.links}`}>
                <ul className="text-start">
                  <li>
                    <Link to={"/"} onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"../blog"} onClick={scrollToTop}>
                      Blogs
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#">Archive</a>
                  </li>
                  <li>
                    <a href="#">Author</a>
                  </li>
                  <li>
                    <a href="#">blogs</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 ">
              <div className={`${styles.footer_categories}`}>
                <div className={`${styles.cat_head} mb-3`}> Categories</div>
                <div className={`${styles.cat_lists}`}>
                  <ul>
                    <li>
                      <Link to={"categories/Finance"} onClick={scrollToTop}>
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link to={"categories/Health"} onClick={scrollToTop}>
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link to={"categories/Fashion"} onClick={scrollToTop}>
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link to={"categories/Nature"} onClick={scrollToTop}>
                        Nature
                      </Link>
                    </li>
                    <Link
                      to={"categories/Self improvement"}
                      onClick={scrollToTop}
                    >
                      Self improvement
                    </Link>

                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 ">
              <div className={`${styles.news_letter_container} mx-auto`}>
                <div className={`${styles.news_letter_headding} `}>
                  Weekly News Letter
                  <p className="mt-2">
                    Get blogs articles and offers via E-mail
                  </p>
                  <div
                    className={`${styles.news_letter_input} p-3  d-flex align-items-center`}
                  >
                    <input type="text" placeholder="Your Email " />
                    <span className="mail">
                      <img src={mail} alt="" />
                    </span>
                  </div>
                  <div className={styles.subscribe_btn}>
                    <button className="btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.footer_bottom}`}>
            <div className={`${styles.bottom_logo} d-flex  align-items-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 29.536 1.87437 34.6342 5.0231 38.6946L10.314 18.7066C12.5156 10.0312 18.2343 5.543 27.4155 5.543H30.5814C37.038 5.543 41.78 11.6041 40.2264 17.871C39.9478 18.995 39.427 20.0446 38.7004 20.9463L36.006 24.2898C35.3146 25.1478 35.0625 26.279 35.3239 27.3494L36.1453 30.7118C36.5704 32.4521 36.4927 34.2773 35.9213 35.9752C33.9775 41.751 28.5636 45.6413 22.4695 45.6413H13.6115C16.755 47.153 20.2786 48 24 48Z"
                  fill="#141624"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.6 29.0123H18.9242C17.4329 29.0123 16.1291 30.018 15.7505 31.4604L13.9165 38.4472H21.1614C23.8415 38.4472 26.1845 36.6398 26.865 34.0476L27.0222 33.4487C27.611 31.2057 25.919 29.0123 23.6 29.0123ZM22.2195 31.1351H19.6787C18.8274 31.1351 18.083 31.7086 17.8658 32.5317L16.8649 36.3243H20.871C22.353 36.3243 23.6486 35.3303 24.0248 33.9045L24.1118 33.5752C24.4373 32.3415 23.5017 31.1351 22.2195 31.1351Z"
                  fill="#141624"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.9962 15.657C20.3748 14.2145 21.6786 13.2088 23.1699 13.2088H27.8457C30.1647 13.2088 31.8566 15.4023 31.2679 17.6452L31.1107 18.2441C30.4302 20.8364 28.0872 22.6437 25.4071 22.6437H18.1622L19.9962 15.657ZM22.1115 16.7282C22.3287 15.9052 23.0731 15.3317 23.9244 15.3317H26.4652C27.7474 15.3317 28.683 16.5381 28.3575 17.7717L28.2705 18.1011C27.8943 19.5268 26.5987 20.5209 25.1167 20.5209H21.1106L22.1115 16.7282Z"
                  fill="#141624"
                />
              </svg>
              <div className="metablog px-3">
                <span className={`${styles.meta}`}>Meta</span>
                <span className={`${styles.blog}`}>Blog</span>
                <div className="copyright">
                  <span className={`${styles.copyright}`}>
                    <span className={`${styles.symbol}`}> © </span>Renzel 2024.
                    All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>

            <div className={`${styles.policy} `}>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
