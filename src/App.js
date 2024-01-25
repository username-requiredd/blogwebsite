import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages
import Home from "./pages/Hero";
import Blogs from "./pages/Blog";
import Blogsingle from "./pages/Blogs-single";
import Authorspage from "./pages/Authorspage";

// layouts
import Homelayout from "./components/layout/Homelayout";
import NotFound from "./pages/Notfound";
import Catogories from "./pages/Blogcategory";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homelayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="blogsingle/:id" element={<Blogsingle />} />
        <Route path="author/:id" element={<Authorspage />} />
        <Route path="categories/:cat" element={<Catogories />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
