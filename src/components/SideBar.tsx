import React from "react";
import pfp from "../utils/images/pfp.png";

const SideBar = () => {
  return (
    <div className="bg-[#20202A] w-[17%] h-screen fixed bottom-0 flex flex-col">
      <div className="h-[27%] flex flex-col justify-center items-center gap-2 bg-[#252530]">
        <img src={pfp} className="rounded-full h-28 w-28"></img>
        <p className="text-white font-bold">Darius Rusu</p>
        <p className="text-sm text-[#52616B]">Front-End Developer</p>
      </div>
      <div className="">
        <p className="flex justify-between px-5 pt-3 text-white font-bold">
          Residence: <span className="text-[#52616B] font-normal">Romania</span>
        </p>
        <p className="flex justify-between px-5 pt-3 text-white font-bold">
          City: <span className="text-[#52616B] font-normal">Sibiu</span>
        </p>
        <p className="flex justify-between px-5 pt-3 text-white font-bold">
          Age: <span className="text-[#52616B] font-normal">21</span>
        </p>
        <hr className="w-[87%] my-5 transform translate-x-5" />
      </div>
    </div>
  );
};

export default SideBar;

// #252530 - small bg
// #20202A - big bg
