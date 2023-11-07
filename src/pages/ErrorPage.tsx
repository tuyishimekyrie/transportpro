import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
      <Header />
      <div className="pt-6 pl-4 pb-12">
        <Link className="text-2xl pb-8 text-blue-600 font-bold flex item-center gap-1 hover:text-blue-800" to="/HomePage ">
          <ArrowLeftIcon className="w-8 " />
          <p>Return Back</p>
        </Link>
        <div className="text-2xl pb-4 text-red-500">Error Page (404)</div>
        <p className="text-2xl pb-4">
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
