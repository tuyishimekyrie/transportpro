import Marquee from "react-fast-marquee";
import Road1 from "../assets/Road1.jpeg";
import Road2 from "../assets/Road2.jpeg";
import Road4 from "../assets/Road4.jpeg";
import Road5 from "../assets/Road5.jpeg";
import Road6 from "../assets/Road6.jpeg";
import Road7 from "../assets/Road7.jpeg";
import plane from "../assets/rwandair.jpg";
import water from "../assets/watertransport.jpg";
import tap from "../assets/Tap_&_Go_Machine.jpg";
import { motion } from "framer-motion";

const Slider = () => {
    return (
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Marquee className="" speed={100}>
          <img
            src={plane}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={Road1}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={Road2}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={Road4}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={Road5}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={Road6}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={Road7}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={tap}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
          <img
            src={water}
            alt="road"
            className="w-40 h-44 sm:w-60 sm:h-64 object-cover px-3 rounded-[1.85rem]"
          />
        </Marquee>
      </motion.div>
    );
};

export default Slider;
