// import React from 'react'
import Road1 from '../assets/Road1.jpeg'
import Road2 from '../assets/taxi.png'
import Road3 from '../assets/rwandair.jpg'
import Road4 from "../assets/toyoya.jpg"; 
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="p-4 flex-col sm:flex sm:flex-row sm:justify-items-center  ">
      <div className="py-10 max-w-[65%]">
        <p className="py-5 sm:text-xl items-start">
          We offer a wide range of transportation services to help you get
          around our beautiful country. Whether you're looking for a scenic
          train ride, a comfortable bus ride, or a convenient airport transfer,
          we have you covered.
        </p>
        <button className="px-4 py-2 bg-slate-400 rounded-md hover:bg-sky-500">
          <Link to="/Contact">Book your Ticket</Link>
        </button>
      </div>
      <div className="  flex flex-wrap gap-2  ">
        <img
          src={Road2}
          alt="road"
          className="object-cover z-10 w-40 h-40  rounded-md"
        />
        <img
          src={Road1}
          alt="road"
          className="object-cover z-10  w-40 h-40  rounded-md"
        />

        <img
          src={Road3}
          alt="road"
          className="object-cover z-10 w-40 h-40  rounded-md"
        />
        <img
          src={Road4}
          alt="road"
          className="object-cover z-10 w-40 h-40  rounded-md"
        />
      </div>
    </div>
  );
}

export default Hero