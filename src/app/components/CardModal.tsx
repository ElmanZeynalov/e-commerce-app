"use client";
import React from "react";
import Image from "next/image";

const CardModal = () => {
  const cardItems = true;

  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cardItems ? (
        <div>card items empty</div>
      ) : (
        // list
        <>
          <div className="flex flex-col gap-8">
            {/*item*/}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className=" flex flex-col justify-between w-full">
                {/*{top}*/}
                <div>
                  {/*title*/}
                  <div className="flex justify-between gap-8">
                    <h3 className="font-semibold">product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">77$</div>
                  </div>

                  {/*description*/}
                  <div className="text-sm text-gray-500">aviable</div>
                </div>
                {/*bottom*/}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">qyt. 2</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>
          </div>
          {/*//buttom*/}
          <div className="">
            <div className="flex justify-between items-center font-semibold">
              <span>Subtitle</span>
              <span>49$</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">
                View card
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white ">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardModal;
