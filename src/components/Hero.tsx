// import React from 'react'
import Road1 from "../assets/Road1.jpeg";
import Road2 from "../assets/taxi.png";
import Road3 from "../assets/rwandair.jpg";
import Road4 from "../assets/toyoya.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface Inputs {
  id: number;
  names: string;
  email: string;
  location: string;
  service: string;
  destination: string;
  times: number;
}
const Hero = () => {
  const [show, setShow] = useState(false);
  const [dataForm, setDataForm] = useState<Inputs[]>([]);
  const { register, handleSubmit,reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
   
    setDataForm([...dataForm, { ...data,id: dataForm.length + 1  }]);
    reset()
  }
  console.log(dataForm)
  return (
    <div className="relative p-4 flex-col sm:flex sm:flex-row sm:justify-items-center  sm:my-6">
      <div className=" pb-6 sm:py-10 max-w-[65%]">
        <p className="py-5 sm:text-xl items-start">
          We offer a wide range of transportation services to help you get
          around our beautiful country. Whether you're looking for a scenic
          train ride, a comfortable bus ride, or a convenient airport transfer,
          we have you covered.
        </p>
        <button
          className="px-4 py-3 bg-slate-900 text-white rounded-full hover:bg-sky-500"
          onClick={() => setShow(!show)}
        >
          <Link to="/">Book your Ticket</Link>
        </button>
      </div>
      {show ? (
        <>
          {" "}
          <div className="absolute w-full  z-10 left-0 top-10 bg-slate-100  p-6 shadow-2xl pl-40 sm:ml-[35%] sm:top-0 sm:w-auto sm:px-16">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-2 py-2 items-center">
                <label htmlFor="name">Names:</label>
                <input
                  id="name"
                  placeholder="Type your name"
                  className="py-2 rounded-md outline-none bg-transparent border-2 border-slate-300"
                  {...register("names")}
                />
              </div>{" "}
              <div className="flex gap-2 py-2 items-center">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="Type your email"
                  className="py-2 rounded-md outline-none bg-transparent border-2 border-slate-300"
                  {...register("email")}
                />
              </div>
              <div className="flex gap-2 py-2 items-center">
                <label htmlFor="location">location</label>
                <input
                  id="location"
                  placeholder="Type your location"
                  className="py-2 rounded-md outline-none bg-transparent border-2 border-slate-300"
                  {...register("location")}
                />
              </div>
              <div className="flex gap-2 py-2 items-center">
                <label htmlFor="destination">Destination</label>
                <input
                  id="destination"
                  placeholder="Type your Destination"
                  className="py-2 rounded-md outline-none bg-transparent border-2 border-slate-300"
                  {...register("destination")}
                />
              </div>
              <div className="flex gap-2 py-2 items-center">
                <label htmlFor="option" className="">
                  Service
                </label>
                <select
                  id="option"
                  className="bg-transparent border-2 border-slate-300 "
                  {...register("service")}
                >
                  <option value=""></option>
                  <option value="Move">Move</option>
                  <option value="uber">Uber</option>
                  <option value="taxi">Taxi</option>
                  <option value="bike">Bike</option>
                </select>
              </div>
              <div className="flex gap-2 py-2 items-center">
                <label htmlFor="time">Time</label>
                <input
                  type="datetime-local"
                  id="time"
                  className="py-2 rounded-md outline-none bg-transparent border-2 border-slate-300"
                  {...register("times")}
                />
              </div>
              <button className="py-3 px-6 bg-slate-900 text-white rounded-full mt-4 hover:bg-emerald-950">
                Submit
              </button>
              <button className="py-3 px-6 bg-slate-900 text-white rounded-full mt-4 ml-2 hover:bg-teal-950" onClick={() => setShow(!show)}>
                Discrard Ticket
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="  flex flex-wrap gap-2  ">
        <img
          src={Road2}
          alt="road"
          className="object-cover z-1 w-40 h-40  rounded-md"
        />
        <img
          src={Road1}
          alt="road"
          className="object-cover z-1  w-40 h-40  rounded-md"
        />

        <img
          src={Road3}
          alt="road"
          className="object-cover z-1 w-40 h-40  rounded-md"
        />
        <img
          src={Road4}
          alt="road"
          className="object-cover z-1 w-40 h-40  rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
