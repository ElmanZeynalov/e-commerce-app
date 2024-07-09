import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-1 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-3 sm:w-[45%] lg:w-[25%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633532.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">45$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-pink-400 text-pink-400 w-max px-4 py-2 w-full hover:bg-pink-400 hover:text-white">
          Add Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633532.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">45$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-pink-400 text-pink-400 w-max px-4 py-2 w-full hover:bg-pink-400 hover:text-white">
          Add Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633532.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">45$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-pink-400 text-pink-400 w-max px-4 py-2 w-full hover:bg-pink-400 hover:text-white">
          Add Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633532.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">45$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-pink-400 text-pink-400 w-max px-4 py-2 w-full hover:bg-pink-400 hover:text-white">
          Add Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
