import React from "react";

function Button({ btnName, btnType }) {
  return (
    <button
      type={btnType}
      className="min-w-[332px] w-fit p-5 bg-blue-10 text-xl font-medium rounded-md hover:bg-blue-800 transition-all ease-in-out"
    >
      {btnName}
    </button>
  );
}

export default Button;
