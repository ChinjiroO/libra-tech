import React from "react";
import CardSolution from "../CardSolution";
import OurProductImg from "../../assets/images/our-product-img.png";
import OurServicesImg from "../../assets/images/our-services-img.png";

const CardData = [
  {
    header: "Our Product",
    title: "card 1",
    description:
      "Non pariatur pariatur ex irure dolor est ullamco mollit cillum esse cillum nulla incididunt.",
    image: OurProductImg,
  },
  {
    header: "Our Service",
    title: "card 2",
    description:
      "Non pariatur pariatur ex irure dolor est ullamco mollit cillum esse cillum nulla incididunt.",
    image: OurServicesImg,
  },
];
function HeaderSolution() {
  return (
    <div className="flex items-center max-h-[960px] p-20 gap-20">
      {CardData.map((data, index) => (
        <div className="flex flex-col w-1/2 gap-12" key={index}>
          <p className="text-blue-10 font-bold text-4xl">{data.header}</p>
          <CardSolution
            title={data.title}
            description={data.description}
            image={data.image}
          />
        </div>
      ))}
    </div>
  );
}

export default HeaderSolution;
