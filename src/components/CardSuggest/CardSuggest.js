import React from "react";

function CardSuggest({ data }) {
  return (
    <div className="flex flex-col w-[429px] h-[560px] border border-gray-300">
      <img src={data.img} alt={data.name} className="object-cover h-1/2" />
      <div className="flex flex-col p-10 h-1/2 gap-6">
        <p className="text-blue-10 font-bold font-xl">{data.name}</p>
        <p className="line-clamp-6">{data.detail}</p>
      </div>
    </div>
  );
}

export default CardSuggest;
