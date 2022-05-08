import React from "react";
import Button from "../Button";
import { useParams } from "react-router-dom";

const Data = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
];
const Details = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
  },
];

function DetailSection({ data }) {
  let id = useParams();
  console.log(id);

  if (data) {
    return (
      <div className="flex bg-gray-300">
        <div className="flex flex-col w-full justify-center items-center text-center bg-white m-6 p-8">
          <p className="text-4xl text-blue-10 font-bold">{data.name}</p>

          <div className="flex container h-[600px] px-10 my-10">
            <img
              src={data.img}
              alt={data.name}
              className="object-cover w-full"
            />
          </div>

          <div className="flex container p-10">
            <p className="text-4xl w-[700px] text-left">
              Snap photos and share like never before
            </p>
          </div>

          <div className="flex container gap-6">
            <div className="flex flex-col px-10 text-left gap-8">
              {Details.map((detail, index) => (
                <div className="max-w-[700px]" key={index}>
                  <p className="font-bold text-2xl mb-3">{detail.title}</p>
                  <p className="text-black/50">{detail.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col px-10 text-left">
              <p className="font-bold text-2xl mb-3">Length of course</p>
              <ul className="flex flex-col gap-4">
                {Data.map((data, index) => (
                  <li key={index} className="text-black/50">
                    <p>{`${index + 1}. ${data}`}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-white mt-6">
            <Button btnName="APPLY NOW" btnType="button" />
          </div>
        </div>
      </div>
    );
  }
  return <main>Data not found</main>;
}

export default DetailSection;
