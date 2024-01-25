import { useParams } from "react-router-dom";
import data from "../data/blogs.json";
import Latestpost from "../components/Latestpost";
const Catogories = () => {
  const { cat } = useParams();
  const category = data.blogs.filter(
    (blog) => blog.category.toLowerCase() === cat.toLowerCase()
  );
  console.log(category);
  return (
    <>
      <Latestpost blogs={category} title={cat} />
    </>
  );
};

export default Catogories;
