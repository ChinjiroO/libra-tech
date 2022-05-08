import React from "react";
import CommunityImg from "../../assets/images/community-img.png";

function HeroBottom() {
  return (
    <div className="flex justify-end items-center h-[960px] w-full overflow-hidden">
      <img
        src={CommunityImg}
        alt="cover"
        className="absolute object-cover object-center h-[960px] w-full"
      />
      <div className="z-10 flex p-20">
        <p
          className="text-6xl text-white w-[600px]"
          style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          The largest community of photo enthusiasts
        </p>
      </div>
    </div>
  );
}

export default HeroBottom;
