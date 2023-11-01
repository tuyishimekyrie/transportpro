// import React from 'react'
import {EnvelopeIcon,PhoneIcon} from "@heroicons/react/24/outline";

const footer = () => {
  return (
      <div className="flex-col justify-items-center  p-4 text-center  border-t-2 border-slate-300">
          <div className="">
      <div className="flex gap-4">
        <EnvelopeIcon className="w-6" />
        <span>Email: Transport@gmail.com</span>
      </div>
      <div className="flex gap-4">
      <PhoneIcon className="w-6" />
        <span>Phone: +25078812232</span>
      </div>
          </div>
      <p>Copyright &copy; 2023 Transport</p>
    </div>
  );
}

export default footer