import React from "react";
import BadgeItem from "./BadgeItem";

const BADGES = [
  {
    title: "Personal Projects",
    count: "5",
  },
  {
    title: "Lines of code written",
    count: "20k+",
  },
  {
    title: "Coffees consumed",
    count: "2k+",
  },
  {
    title: "Earned coding",
    count: "0$",
    label: "(And I would like to change that)",
  },
];

const Badges = () => {
  return (
    <div className="mt-28 transform translate-x-[53%] w-1/2 flex justify-between">
      {BADGES.map((badge) => (
        <BadgeItem {...badge} key={badge.title} />
      ))}
    </div>
  );
};

export default Badges;
