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
import Login from "../components/Login";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/HomePage", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/About", element: <About />, errorElement: <ErrorPage /> },
  { path: "/Services", element: <Services />, errorElement: <ErrorPage /> },
  { path: "/Cars", element: <Cars />, errorElement: <ErrorPage /> },
  { path: "/Airplanes", element: <Airplanes />, errorElement: <ErrorPage /> },
  { path: "/Boats", element: <Boats />, errorElement: <ErrorPage /> },
  { path: "/Contact", element: <Contact />, errorElement: <ErrorPage /> },
  { path: "/Dashboard", element: <Layout />, errorElement: <ErrorPage /> },
  { path: "/Login", element: <Login />, errorElement: <ErrorPage /> },
]);

export default router;
