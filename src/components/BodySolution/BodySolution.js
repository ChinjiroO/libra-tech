import React from "react";

const Body = ({ title, description }) => (
  <div className="flex flex-col w-1/2 px-20 justify-center gap-4">
    <p className="text-blue-10 text-3xl font-medium">{title}</p>
    <p>{description}</p>
  </div>
);

const Image = ({ src }) => (
  <img
    src={src}
    alt={`solution-${src}`}
    className="object-cover w-1/2 bg-gray-300"
  />
);

function BodySolution({ title, description, src, reverse }) {
  return (
    <>
      {reverse ? (
        <div className="flex flex-row-reverse h-[600px]">
          <Image src={src} />
          <Body title={title} description={description} />
        </div>
      ) : (
        <div className="flex flex-row h-[600px]">
          <Image src={src} />
          <Body title={title} description={description} />
        </div>
      )}
    </>
  );
}

export default BodySolution;
