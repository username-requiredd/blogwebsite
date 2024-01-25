import Navbar from "../Nav";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
const Homelayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Homelayout;
