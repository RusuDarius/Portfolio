import pfp from "../utils/images/pfp.png";
import DoughnutChart from "./SidebarComponents/DoughnutChart";
import SkillsChart from "./SidebarComponents/SkillsChart";
import Contacts from "./Contacts";

const SideBar = () => {
  return (
    <div className="bg-[#20202A] w-[17%] h-screen fixed bottom-0 flex flex-col">
      <div className="h-[27%] flex flex-col justify-center items-center gap-2 bg-[#252530]">
        <img
          src={pfp}
          className="rounded-full h-[117px] w-28 object-cover"
        ></img>
        <p className="text-white font-bold">Darius Rusu</p>
        <p className="text-sm text-[#52616B]">FrontEnd Developer</p>
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
      </div>

      <hr className="w-[87%] my-5 transform translate-x-5 border-[#52616B]" />

      <div className=" h-[17%] flex">
        <DoughnutChart title="Romanian" progress={100} />
        <DoughnutChart title="English" progress={85} />
        <DoughnutChart title="French" progress={55} />
      </div>

      <hr className="w-[87%] my-5 transform translate-x-5 border-[#52616B]" />

      <div className="h-[17%] flex flex-col mb-5">
        <SkillsChart title="HTML" progress={85} />
        <SkillsChart title="CSS" progress={70} />
        <SkillsChart title="JavaScript" progress={60} />
        <SkillsChart title="React" progress={40} />
        <SkillsChart title="TailwindCSS" progress={65} />
      </div>

      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default SideBar;

// #252530 - small bg
// #20202A - big bg
