import Header from "../components/Header";
import Footer from "../components/Footer";
import car from "../assets/teramont-4motion.webp";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between mx-2">
        <div className="m-4 mb-60">
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
        </div>
        <div>
          <img src={car} alt="car" className="w-full h-96 object-cover" />
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
