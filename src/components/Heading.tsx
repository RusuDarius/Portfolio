import React from "react";
import Darius from "../utils/images/Darius.png";
import Badges from "./Badges";

const Heading = () => {
  return (
    <>
      <div className="flex justify-between transform translate-x-[50%] translate-y-20 w-1/2">
        <div className="flex flex-col gap-6 w-2/3 justify-center pl-10">
          <p className="text-5xl font-bold text-white">
            Discover more about me
          </p>
          <p className="text-white">
            Hello, my name is Darius and I try to be a developer
          </p>
          <div className="bg-slate-700 text-center text-sm text-white p-3 w-[20%] cursor-pointer hover:scale-110 hover:bg-[#89cff0] hover:text-black duration-100 hover: shadow-lg">
            Download CV
          </div>
        </div>
        <div>
          <img src={Darius} alt="Darius" className="rounded-full" />
        </div>
      </div>
      <Badges />
    </>
  );
};

export default Heading;
