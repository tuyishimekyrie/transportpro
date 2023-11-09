import Header from "../components/Header";
import Footer from "../components/Footer";
import car from "../assets/teramont-4motion.webp";
import car1 from "../assets/polofront.jpg";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="flex-col sm:flex sm:flex-row justify-between mx-2 my-32">
        <div className="m-4 mb-10 sm:mb-40">
          <p className="text-xl py-2 ">
            <span className="text-sky-800">Public Transport </span>Rwanda
          </p>
          <p className="text-xl py-2 ">
            <span className="text-sky-800">Move Volkwaswagen </span>Rwanda
          </p>
          <p className="text-xl py-2 ">
            <span className="text-sky-800">Hyundai </span>Rwanda
          </p>
          <p className="text-xl py-2 ">
            <span className="text-sky-800">Toyota </span>Rwanda
          </p>
          <p className="text-xl py-2 ">
            <span className="text-sky-800">CarBaba </span>Rwanda
          </p>
          <p className="text-xl py-2 ">
            <span className="text-sky-800">CarBaba </span>Rwanda
          </p>
        </div>
        <div className="flex  gap-4 mb-5">
          <img
            src={car}
            alt="car"
            className="w-40 h-40 sm:w-80 sm:h-80 object-cover rounded-md"
          />
          <img
            src={car1}
            alt="car"
            className="w-40 h-40 sm:w-80 sm:h-80 object-contain rounded-md"
          />
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
