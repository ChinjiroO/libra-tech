import React from "react";
import BgImage from "../../assets/images/hero-section-img.png";
import Button from "../Button";

function HeroSection() {
  return (
    <div
      className="h-screen max-h-[600px] bg-cover"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="flex flex-col w-1/2 h-full justify-center text-white px-36 gap-10">
        <div>
          <p
            className="text-6xl"
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            News
          </p>
          <p
            className="text-5xl"
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Everything we do now for your future.
          </p>
        </div>
        <Button btnType={"button"} btnName={"Contact Us"} />
      </div>
    </div>
  );
}

export default HeroSection;
