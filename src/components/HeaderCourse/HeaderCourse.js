import React from "react";

function HeaderCourse({ heading, paragraph, images }) {
  return (
    <div className="flex flex-col items-center min-h-[300px] p-20 gap-14">
      <div className="flex flex-col text-center gap-4">
        <p className="text-blue-10 font-bold text-5xl">{heading}</p>
        <p className="text-4xl">{paragraph}</p>
      </div>
      <ul className="flex flex-wrap gap-12 justify-center">
        {images?.map((image, index) => (
          <li key={index} className="flex">
            <img
              src={image}
              alt={image}
              className="object-cover w-40 h-40 shadow-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderCourse;
