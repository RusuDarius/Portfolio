import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Darius from "../utils/images/Darius.png";
import Badges from "./Badges";
import CuriculumVitae from "../utils/assets/CV.pdf";

const Heading = () => {
  const [text] = useTypewriter({
    words: [
      "FrontEnd Developer",
      "Student",
      "Hard Worker",
      "Dedicated Learner",
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <div className="w-[80%]">
      <div className="flex justify-between h-[360px] translate-y-20 bg-[#9E9D98] shadow-2xl items-center bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-sm">
        <div className="flex flex-col gap-6 w-2/3 justify-center pl-10">
          <p className="text-5xl font-bold text-white">
            Discover more about me
          </p>
          <p className="text-white">
            Hello, my name is Darius and I am a{" "}
            <span className="text-slate-800 font-semibold">
              {text}
              <Cursor />
            </span>
          </p>
          <a
            className="bg-slate-700 text-center text-sm text-white p-3 w-[20%] cursor-pointer hover:scale-110 hover:bg-[#89cff0] hover:text-black duration-100 hover: shadow-lg"
            href={CuriculumVitae}
            download="DariusRusu_CV"
          >
            Download CV
          </a>
        </div>
        <div className="w-1/3">
          <img src={Darius} alt="Darius" className="rounded-full" />
        </div>
      </div>
      <Badges />
    </div>
  );
};

export default Heading;
