import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="felx felx-col gap-6">
      <h4 className="font-medium ">Choose a color</h4>

      <ul className="flex items-center gap-4 mt-4">
        <li className="w-8 h-8 rounded-full rin-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className=" absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2  transform -translate-y-1/2 -translate-x-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full rin-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full rin-1 ring-gray-300 cursor-pointer relative bg-green-500"></li>
      </ul>

      <h4 className="font-medium mt-4">Choose a size</h4>
      <ul className="flex items-center gap-3 mt-4">
        <li className="ring-1 ring-pink-400 text-pink-400 rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-pink-400 text-white bg-pink-400  rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200  text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
