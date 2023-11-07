import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="py-4 px-2 my-8">
        <div className="flex flex-col items-center gap-2 my-3">
          <p className="flex gap-2">
            <EnvelopeIcon className="w-6" />
            <span>Email: Transport@gmail.com</span>
          </p>
          <p className="flex gap-2">
            <PhoneArrowDownLeftIcon className="w-6" />
            <span>Phone: +250786128881</span>
          </p>
          <p className="flex gap-2">
            <MapPinIcon className="w-6" />
            <span>Address: Kigali,Rwanda</span>
          </p>
        </div>
        <div className="flex flex-col justify-items-center items-center my-5">
          <h2 className="text-2xl font-bold border-b-2 border-slate-400 my-3">
            Contact Us
          </h2>
          <input
            type="text"
            placeholder="Type Email Here."
            className="border-none bg-slate-300 rounded-sm text-black outline-none my-2 p-2 placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Type Message Here."
            className="border-none bg-slate-300 rounded-sm text-black outline-none my-2 p-2 placeholder:text-black"
          />
          <button className="my-2 bg-sky-600 py-3 px-6 rounded-full text-white hover:bg-sky-700 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
