import Header from "../components/Header";
import Footer from "../components/Footer";
import Transport from "../components/Transport";
import Banner from "../components/Banner";

const cars = () => {
  return (
    <div>
      <Header />
      <div className="m-4">
        <Banner />
        <h1 className="font-bold text-center py-4 text-2xl  ">Services</h1>
        <Transport />
      </div>
      <Footer />
    </div>
  );
};

export default cars;
