import { FC } from "react";

type InfoProps = {
  title: string;
  description: string;
};

const InfoItem: FC<InfoProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-xl italic font-semibold">{title}</div>
      <div className="text-xs w-2/3 pt-2">{description}</div>
    </div>
  );
};

export default InfoItem;
