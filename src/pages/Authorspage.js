import styles from "../styles/authors.module.css";
import author from "../images/author.png";
import Latestpost from "../components/Latestpost";
import facebook from "../images/logo-facebook (2).svg";
import data from "../data/blogs.json";
import searchIcon from "../images/search.svg";

import { useParams } from "react-router-dom";
import { useState } from "react";

const Authorspage = () => {
  const { id } = useParams();
  const { author, authorimg } = data.blogs[id];
  const authorsBlog = data.blogs.filter((blog) => blog.author == author);
  // console.log(authorsBlog);
  const bio = [
    {
      name: "Joseph Peter",
      about:
        "Meet Joseph Peter a passionate storyteller and avid explorer with a background in journalism Joseph has a knack for weaving words that captivate readers. His blog takes you on a journey through his lens. Joseph's writing is a blend of introspection inviting readers to see the world through his unique perspective",
    },
    {
      name: "Hyeladi Markus",
      about:
        "Say hello to Hyeladi Markus aka boi spyro, the creative mind behind words. As a seasoned wordsmith and literatue enthusiast, Hyela's blog is a literary heaven. Whether delving into fashion, health or nature, Hyela invites readers to explore the beauty and power of language with the passion of story telling, each post is a journey into the relms of imagination and reflection ",
    },
    {
      name: "Solomon Paul",
      about:
        "Introducing Solomon Paul, the tech-savy blogger weaving a narrative of innovation, finance insights, and mental resiliance. with a knack for simplifying complex tech concepts, Paul's blog offers a unique blend of financial wisdom and strategies for cultivating a resiliance minset. join him on a journey through bytes, budgets, and mindfullness as he guides readers to navigate the intersection of tech, finance and personal well-being",
    },
  ];
  const abt = bio.filter((auth) => auth.name === author);
  const authorBio = abt[0].about;
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const results = search
    ? authorsBlog.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    : authorsBlog;

  // setSearch(results);

  return (
    <>
      <div className="container mt-4 mb-5">
        <div className={`${styles.authors_container} container-lg pt-5`}>
          <div className={`${styles.author}  mb-2 d-flex align-items-center`}>
            <img
              src={authorimg}
              alt=""
              className="img-fluid rounded mx-auto d-block"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "80px",
              }}
            />
            <div
              className={`${styles.authors_name} px-2 align-items-center justify-content-center`}
            >
              {" "}
              {author}
              <div className={`${styles.authors_tag}`}>
                {" "}
                Collaborator & editor
              </div>
            </div>
          </div>

          <div className={`${styles.bio}`}>
            <p>{authorBio}</p>
          </div>
          <div className={`${styles.socials}`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 8.04242C15 4.17679 11.8656 1.04242 8 1.04242C4.13438 1.04242 1 4.17679 1 8.04242C1 11.5362 3.55938 14.4321 6.90625 14.9577V10.0665H5.12844V8.04242H6.90625V6.50023C6.90625 4.74617 7.95156 3.77648 9.55031 3.77648C10.3162 3.77648 11.1175 3.91336 11.1175 3.91336V5.63617H10.2344C9.36531 5.63617 9.09344 6.17554 9.09344 6.72992V8.04242H11.0347L10.7247 10.0665H9.09375V14.9584C12.4406 14.433 15 11.5371 15 8.04242Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.5 3.42176C14.9373 3.66624 14.342 3.82732 13.7328 3.89988C14.373 3.525 14.8545 2.92944 15.0869 2.22488C14.4816 2.57882 13.8205 2.82716 13.1319 2.95926C12.8419 2.65536 12.4932 2.4136 12.1069 2.24868C11.7205 2.08375 11.3047 1.99911 10.8847 1.99988C9.18406 1.99988 7.80781 3.35613 7.80781 5.02801C7.80661 5.26056 7.83325 5.49242 7.88719 5.71863C6.66772 5.66146 5.4736 5.35038 4.38124 4.80528C3.28889 4.26017 2.32234 3.49306 1.54344 2.55301C1.27018 3.01367 1.12567 3.53927 1.125 4.07488C1.125 5.12488 1.67281 6.05301 2.5 6.59676C2.00991 6.58513 1.52987 6.45541 1.10063 6.21863V6.25613C1.10063 7.72488 2.16313 8.94676 3.56938 9.22488C3.30493 9.29538 3.03243 9.3311 2.75875 9.33113C2.56456 9.33147 2.3708 9.31263 2.18031 9.27488C2.57125 10.478 3.70906 11.353 5.05688 11.378C3.96168 12.222 2.61707 12.6782 1.23438 12.6749C0.988943 12.6745 0.743739 12.6599 0.5 12.6311C1.90662 13.5293 3.5417 14.0044 5.21063 13.9999C10.8781 13.9999 13.9744 9.38426 13.9744 5.38113C13.9744 5.24988 13.9709 5.11863 13.9647 4.99051C14.5657 4.56303 15.0856 4.03179 15.5 3.42176Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.9166 2.16656C11.6895 2.16887 12.43 2.47692 12.9766 3.02345C13.5231 3.56997 13.8311 4.31054 13.8334 5.08344V10.9166C13.8311 11.6895 13.5231 12.43 12.9766 12.9766C12.43 13.5231 11.6895 13.8311 10.9166 13.8334H5.08344C4.31054 13.8311 3.56997 13.5231 3.02345 12.9766C2.47692 12.43 2.16887 11.6895 2.16656 10.9166V5.08344C2.16887 4.31054 2.47692 3.56997 3.02345 3.02345C3.56997 2.47692 4.31054 2.16887 5.08344 2.16656H10.9166ZM10.9166 1H5.08344C2.8375 1 1 2.8375 1 5.08344V10.9166C1 13.1625 2.8375 15 5.08344 15H10.9166C13.1625 15 15 13.1625 15 10.9166V5.08344C15 2.8375 13.1625 1 10.9166 1Z"
                  fill="white"
                />
                <path
                  d="M11.7916 5.08344C11.6185 5.08344 11.4493 5.03212 11.3054 4.93597C11.1615 4.83983 11.0494 4.70317 10.9832 4.54329C10.9169 4.3834 10.8996 4.20747 10.9334 4.03773C10.9671 3.868 11.0505 3.71209 11.1728 3.58972C11.2952 3.46735 11.4511 3.38401 11.6209 3.35025C11.7906 3.31649 11.9665 3.33382 12.1264 3.40004C12.2863 3.46627 12.423 3.57842 12.5191 3.72231C12.6152 3.86621 12.6666 4.03538 12.6666 4.20844C12.6668 4.32341 12.6443 4.43731 12.6005 4.54358C12.5566 4.64985 12.4921 4.74641 12.4108 4.82771C12.3295 4.90901 12.233 4.97345 12.1267 5.01734C12.0204 5.06122 11.9065 5.08368 11.7916 5.08344Z"
                  fill="white"
                />
                <path
                  d="M8 5.66656C8.46151 5.66656 8.91266 5.80342 9.29639 6.05982C9.68012 6.31622 9.9792 6.68065 10.1558 7.10703C10.3324 7.53341 10.3786 8.00259 10.2886 8.45523C10.1986 8.90787 9.97633 9.32365 9.64999 9.64999C9.32365 9.97633 8.90787 10.1986 8.45523 10.2886C8.00259 10.3786 7.53341 10.3324 7.10703 10.1558C6.68065 9.9792 6.31622 9.68012 6.05982 9.29639C5.80342 8.91266 5.66656 8.46151 5.66656 8C5.66722 7.38134 5.91328 6.7882 6.35074 6.35074C6.7882 5.91328 7.38134 5.66722 8 5.66656ZM8 4.5C7.30777 4.5 6.63108 4.70527 6.0555 5.08986C5.47993 5.47444 5.03133 6.02107 4.76642 6.66061C4.50152 7.30015 4.4322 8.00388 4.56725 8.68282C4.7023 9.36175 5.03564 9.98539 5.52513 10.4749C6.01461 10.9644 6.63825 11.2977 7.31718 11.4327C7.99612 11.5678 8.69985 11.4985 9.33939 11.2336C9.97893 10.9687 10.5256 10.5201 10.9101 9.9445C11.2947 9.36892 11.5 8.69223 11.5 8C11.5 7.07174 11.1313 6.1815 10.4749 5.52513C9.8185 4.86875 8.92826 4.5 8 4.5Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.8962 4.64969C15.8962 3.24344 14.8618 2.11219 13.5837 2.11219C11.8524 2.03125 10.0868 2 8.28242 2H7.71992C5.91992 2 4.15117 2.03125 2.41992 2.1125C1.14492 2.1125 0.110542 3.25 0.110542 4.65625C0.0324166 5.76844 -0.000708404 6.88094 0.0011666 7.99344C-0.0019584 9.10594 0.0334583 10.2195 0.107417 11.3341C0.107417 12.7403 1.14179 13.8809 2.41679 13.8809C4.23554 13.9653 6.10117 14.0028 7.99804 13.9997C9.89804 14.0059 11.7585 13.9664 13.5793 13.8809C14.8574 13.8809 15.8918 12.7403 15.8918 11.3341C15.9668 10.2184 16.0012 9.10594 15.998 7.99031C16.0051 6.87781 15.9712 5.76427 15.8962 4.64969ZM6.46992 11.0591V4.91844L11.0012 7.98719L6.46992 11.0591Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <form className="d-flex mt-3 mb-3 mx-auto" onSubmit={handleSubmit}>
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

      <Latestpost
        blogs={results}
        title={search ? "Search results" : ` Posts`}
      />
      {results.length === 0 && (
        <div className="text-center mb-5 ">No results found</div>
      )}
    </>
  );
};

export default Authorspage;
