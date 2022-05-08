import React from "react";
import CardSuggest from "../CardSuggest";

function SuggestSection({ data, title }) {
  return (
    <div className="flex flex-col container mx-auto py-20 gap-10">
      <p className="text-3xl px-20 md:px-0">{`Suggest ${title}`}</p>
      <div className="flex flex-col 2xl:flex-row flex-wrap 2xl:justify-between items-center lg:items-start gap-10">
        {data.map((item) => (
          <CardSuggest data={item} />
        ))}
      </div>
    </div>
  );
}

export default SuggestSection;
