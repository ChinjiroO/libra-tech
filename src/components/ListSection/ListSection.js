import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const List = ({ id, name, detail, img }) => (
  <div className="flex w-full max-w-[900px] mb-16">
    <img
      src={img}
      alt={`course-${name}`}
      className="object-cover min-w-[223px] h-[147px] bg-gray-300"
    />
    <div className="flex flex-col w-full gap-4 ml-16">
      <Link to={`${id}`}>
        <p className="text-2xl text-blue-10">{name}</p>
      </Link>
      <p className="text-lg line-clamp-3">{detail}</p>
    </div>
  </div>
);

function ListSection({ data }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(data);
  }, [data]);

  return (
    <div className="p-20">
      {lists?.map((list) => (
        <List
          key={list.id}
          id={list.id}
          name={list.name}
          detail={list.detail}
          img={list.img}
        />
      ))}
      <div className="flex w-full justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default ListSection;
