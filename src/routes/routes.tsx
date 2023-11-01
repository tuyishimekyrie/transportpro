import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Services from "../pages/Services";
import Cars from "../pages/cars";
import Airplanes from "../pages/Airplanes";
import Boats from "../pages/Boats";
import Contact from "../pages/Contact";
import Details from "../pages/Details";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/HomePage", element: <HomePage /> },
  { path: "/About", element: <About /> },
  { path: "/Services", element: <Services /> },
  { path: "/Cars", element: <Cars /> },
  { path: "/details/:id", element: <Details /> },
  { path: "/Airplanes", element: <Airplanes /> },
  { path: "/Boats", element: <Boats /> },
  { path: "/Contact", element: <Contact /> },
]);

export default router;
