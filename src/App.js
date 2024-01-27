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
import Catogories from "./pages/Blogcategory";

// layouts
import Homelayout from "./components/layout/Homelayout";
import NotFound from "./pages/Notfound";
import BlogLayout from "./components/layout/BlogLayout";
import AuthorLayout from "./components/layout/AuthorLayout";
import CategoriesLayout from "./components/layout/CategoriesLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homelayout />}>
        <Route index element={<Home />} />

        <Route path="blogs" element={<BlogLayout />}>
          <Route index element={<Blogs />} />
          <Route path=":id" element={<Blogsingle />} />
        </Route>

        <Route path="authors" element={<AuthorLayout />}>
          <Route path=":id" element={<Authorspage />} />
        </Route>

        <Route path="categories" element={<CategoriesLayout />}>
          <Route path=":cat" element={<Catogories />} />
        </Route>
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
