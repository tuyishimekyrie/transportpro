// import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className="px-4 py-2 flex-col   sm:flex sm:flex-row sm:justify-between  border-b-2 border-slate-300 ">
      <div className="logo">
        <img src={logo} alt="logo" className="w-10 rounded-lg" />
      </div>
      <ul className="flex items-center gap-3">
        <li className="text-xl hover:text-sky-500">
          <Link to="/HomePage">Home</Link>
        </li>{" "}
        <li className="text-xl hover:text-sky-500">
          <Link to="/About">About</Link>
        </li>
        <li className="text-xl hover:text-sky-500">
          <Link to="/Services">Services</Link>
        </li>
        <li className="text-xl hover:text-sky-500">
          <Link to="/cars">Cars</Link>
        </li>
        <li className="text-xl hover:text-sky-500">
          <a href="/Airplanes">Airplanes</a>
        </li>
        <li className="text-xl hover:text-sky-500">
          <a href="/Boats">Boats</a>
        </li>
        <li className="text-xl hover:text-sky-500">
          <a href="/Contact">Contact US</a>
        </li>
      </ul>
    </div>
  );
}

export default Header