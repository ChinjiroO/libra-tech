import React from "react";
import AboutImg from "../../assets/images/about-us-img.png";

function AboutUsSection() {
  return (
    <div className="flex h-[600px] p-20">
      <img
        src={AboutImg}
        alt="about-us"
        className="object-cover min-w-[500px] w-1/2"
      />
      <div className="flex flex-col px-20 justify-center gap-4">
        <p className="text-blue-10 text-3xl font-medium">About us</p>
        <p>
          Deserunt commodo proident pariatur consequat eu. Officia incididunt
          sunt enim ex ex incididunt aute cupidatat non pariatur commodo.
          Officia officia qui magna eiusmod commodo pariatur sit reprehenderit
          aliquip voluptate sunt.
        </p>
      </div>
    </div>
  );
}

export default AboutUsSection;
