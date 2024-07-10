"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/27044411/pexels-photo-27044411/free-photo-of-a-man-sitting-in-a-chair-in-front-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/27001556/pexels-photo-27001556/free-photo-of-a-black-and-white-photo-of-a-city-street.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/23105860/pexels-photo-23105860/free-photo-of-a-black-and-white-photo-of-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/9048174/pexels-photo-9048174.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-16 mt-8">
        {images.map((image, i) => (
          <div
            className="w-1/4 h-32 relative mt-8 gap-4 cursor-pointer"
            key={image.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              className="object-cover rounded-md "
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
