import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Transport from "../components/Transport";
import {motion} from 'framer-motion'
const App = () => {
  return (
    <motion.div className="">
      <Header />
      <Hero />
      <Slider />
      <h1 className="font-bold text-center py-4 text-2xl sm:text-3xl underline">
        Services
      </h1>
      <Transport />
      <Footer />
    </motion.div>
  );
};

export default App;
