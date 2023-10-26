import BadgeItem from "./BadgeComponents/BadgeItem";

const BADGES = [
  {
    title: "Personal Projects",
    count: "5",
  },
  {
    title: "Lines of code written",
    count: "50k+",
  },
  {
    title: "Coffees consumed",
    count: "3k+",
  },
  {
    title: "Earned coding",
    count: "0$",
    label: "(And I would like to change that)",
  },
];

const Badges = () => {
  return (
    <div className="mt-28 flex justify-between">
      {BADGES.map((badge) => (
        <BadgeItem {...badge} key={badge.title} />
      ))}
    </div>
  );
};

export default Badges;
