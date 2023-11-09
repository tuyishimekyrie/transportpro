// import React from 'react'
import { ChatBubbleLeftEllipsisIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import logo from '../assets/logo.jpg'


const footer = () => {
  return (
    <div className="flex-col justify-items-center  p-4 text-center  border-t-2 border-slate-300">
      <div className="flex justify-between my-4">
        <div>
          <img src={logo} alt="logo" className="w-6 sm:w-10" />
        </div>
        <div className="flex justify-between gap-4">
          <ChatBubbleLeftEllipsisIcon className="w-4 sm:w-8" />
          <EnvelopeIcon className="w-4 sm:w-8" />
          <PhoneIcon className="w-4 sm:w-8" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center sm:flex sm:flex-row sm:justify-between sm:items-start my-4">
        <div className="flex gap-4">
          <p className="text-xs sm:text-xl">&copy; 2023 Transport Copyright </p>
          <p className="text-xs sm:text-xl">Terms</p>
          <p className="text-xs sm:text-xl">Privacy</p>
          <p className="text-xs sm:text-xl">Cookies</p>
        </div>
        <div className="flex gap-4">
          <p className="text-xs sm:text-xl">Tags</p>
          <p className="text-xs sm:text-xl">Places</p>
          <p className="text-xs sm:text-xl">Resources</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default footer;
