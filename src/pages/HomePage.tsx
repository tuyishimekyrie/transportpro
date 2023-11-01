// import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Transport from "../components/Transport";

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Slider />
      <h1 className="font-bold text-center py-4 text-xl ">Services</h1>
      <Transport />
      <Footer />
    </div>
  );
};

export default App;
