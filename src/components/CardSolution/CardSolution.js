import React from "react";

function CardSolution({ title, description, image }) {
  return (
    <div className="flex flex-col h-full max-w-[545px] max-h-[560px] border border-gray-300">
      <img src={image} alt={title} className="object-cover h-1/2" />
      <div className="flex flex-col p-10 h-1/2 bg-white">
        <p className="text-blue-10 font-bold font-xl">{title}</p>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default CardSolution;
