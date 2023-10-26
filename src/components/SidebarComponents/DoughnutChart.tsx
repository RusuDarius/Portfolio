import { Chart } from "primereact/chart";
import { FC } from "react";

type Props = {
  progress: number;
  title: string;
};

const DoughnutChart: FC<Props> = ({ progress, title }) => {
  const remainder = 100 - progress;
  const charData = {
    datasets: [
      {
        data: [progress, remainder],
        backgroundColor: ["rgb(157 178 191)", "rgb(63 63 70)"],
        borderWidth: 0,
      },
    ],
  };
  const charOptions = {
    cutout: "70%",
  };

  return (
    <div className="w-[40%] flex items-center justify-center flex-col gap-y-2 2xl:gap-y-4 md:gap-y-2 relative">
      <Chart
        type="doughnut"
        data={charData}
        options={charOptions}
        className="h-1/2 w-full flex items-center justify-center"
      />
      <div className="text-white">{title}</div>
      <div className="absolute text-[#52616B] -translate-y-[80%] text-xs">
        {title === "English" ? "C1" : progress + "%"}
      </div>
    </div>
  );
};

export default DoughnutChart;
