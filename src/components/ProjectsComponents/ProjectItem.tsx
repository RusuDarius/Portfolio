import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

type ProjectProps = {
  title: string;
  description: string;
  codeLink: string;
};

const ProjectItem: FC<ProjectProps> = ({ title, description, codeLink }) => {
  return (
    <div className="text-white mt-7 h-[260px] w-[350px] bg-slate-700 shadow-2xl bg-opacity-70 backdrop-filter backdrop-blur-lg px-10 py-7 rounded-sm">
      <div className="h-2/3">
        <div className="text-xl font-semibold italic">{title}</div>
        <p className="text-sm mt-5 text-[#9DB2BF]">{description}</p>
      </div>

      <div className="mt-11 text-sm flex gap-10">
        <a
          className="flex items-center gap-1 bg-[#9DB2BF] h-9 p-3 rounded-md shadow-lg hover:scale-105 duration-100"
          href={codeLink}
          target="_blank"
        >
          See Code
          <IoIosArrowForward />
        </a>
        {title !== "Andarius Bogdizza" ? (
          <a
            className="flex items-center gap-1 bg-[#FF4C29] h-9 p-3 rounded-md hover:scale-105 duration-100 shadow-lg"
            href="#"
            target="_blank"
          >
            See Project
            <IoIosArrowForward />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectItem;
