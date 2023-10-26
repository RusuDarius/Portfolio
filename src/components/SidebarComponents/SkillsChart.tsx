import { FC } from "react";
import { useEffect, useState } from "react";

type Props = {
  progress: number;
  title: string;
};

const SkillsChart: FC<Props> = ({ progress, title }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between px-5 mt-4">
        <div className="text-white text-sm">{title}</div>
        <div className="text-[#52616B] text-sm">{`${progress}%`}</div>
      </div>
      <div className="w-[87%] h-2 mx-5 bg-zinc-700 rounded-xl">
        <div
          className="w-[87%] h-2 rounded-md bg-[#89cff0]"
          style={{
            width: `${width}%`,
            transition: "width 0.8s",
          }}
        />
      </div>
    </div>
  );
};

export default SkillsChart;
