import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select className="px-4 py-2 rounded-2xl text-xs font-medium bg-gray-200">
          <option>type</option>
          <option>Physical</option>
          <option>Digital</option>
        </select>

        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-sm rounded-2xl pl-4 w-24 ring-1 ring-gray-500"
        />

        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-sm rounded-2xl pl-4 w-24  ring-1 ring-gray-500"
        />

        <select className="px-5 py-2 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Size</option>
        </select>

        <select className="px-4 py-2 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Color</option>
        </select>

        <select className="px-4 py-2 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Category</option>
          <option>New Arrival</option>
          <option>Popular</option>
        </select>
      </div>
      <div>
        <select className="px-4 py-2 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Sort By</option>
          <option>Price (low to high)</option>
          <option>Price (high to low)</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
