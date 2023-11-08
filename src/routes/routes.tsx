import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Services from "../pages/Services";
import Cars from "../pages/Cars";
import Airplanes from "../pages/Airplanes";
import Boats from "../pages/Boats";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../firebase-basics/Layout";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/HomePage", element: <HomePage /> },
  { path: "/About", element: <About /> },
  { path: "/Services", element: <Services /> },
  { path: "/Cars", element: <Cars /> },
  { path: "/Airplanes", element: <Airplanes /> },
  { path: "/Boats", element: <Boats /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Dashboard", element: <Layout /> },
]);

export default router;
