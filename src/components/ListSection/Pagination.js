import React from "react";

function Pagination() {
  return (
    <div className="flex items-center space-x-1">
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
      >
        Previous
      </a>

      <a
        href="#"
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      >
        1
      </a>
      <a
        href="#"
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      >
        2
      </a>
      <a
        href="#"
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      >
        3
      </a>
      <a
        href="#"
        className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
      >
        Next
      </a>
    </div>
  );
}

export default Pagination;
