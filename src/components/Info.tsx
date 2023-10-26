import React from "react";
import InfoItem from "./InfoComponents/InfoItem";

const Info = () => {
  return (
    <div>
      <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-black mt-5">
        What I can do!
      </div>
      <div className="text-sm text-white py-3 ">
        A few other things I am capable of that might or might not be included
        in the projects above.
      </div>
      <div className="flex text-white w-[65%] justify-between py-5 mb-16">
        <InfoItem
          title="Responsiveness"
          description="Make fully responsive web applications from mobile view all the way to 4K."
        />
        <InfoItem
          title="Using APIs"
          description="Make fully functional web apps that communicate with public/private APIs."
        />
        <InfoItem
          title="Adaptation"
          description="Capable of adapting to multiple technologies even if not known perfectly."
        />
      </div>
    </div>
  );
};

export default Info;
