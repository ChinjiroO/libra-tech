import React from "react";

function DetailSection({ data }) {
  if (data) {
    return (
      <div className="flex bg-gray-300">
        <div className="flex flex-col w-full justify-center items-center text-center bg-white m-6 p-8">
          <p className="text-2xl text-blue-10 ">{data.name}</p>
          <div className="flex max-h-[841px] max-w-full bg-gray-300 my-10">
            <img src={data.img} alt={data.name} />
          </div>
          <div className="">{data.detail}</div>
        </div>
      </div>
    );
  }
  return <main>Data not found</main>;
}

export default DetailSection;
