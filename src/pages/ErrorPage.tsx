import Header from "../components/Header";
import Footer from "../components/Footer";
import {  isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
          <Header />
          <div>Error Page (404)</div>
          {isRouteErrorResponse(error) ?"Invalid Page":"Unexpected error"}
      <Footer />
    </div>
  );
};

export default ErrorPage;
