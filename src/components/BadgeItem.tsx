import { FC } from "react";

type BadgeItemProps = {
  title: string;
  count: string;
  label?: string;
};

const BadgeItem: FC<BadgeItemProps> = ({ title, count, label }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="font-bold text-2xl text-slate-800">{count}</p>
        <p className={`${label ? "text-white flex flex-col " : "text-white"}`}>
          {title}
          <span className="text-[8px]">{label}</span>
        </p>
      </div>
    </>
  );
};

export default BadgeItem;
