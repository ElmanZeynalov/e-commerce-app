import React from "react";
import ProductImages from "@/app/components/ProductImages";
import CustomizeProducts from "@/app/components/CustomizeProducts";
import Add from "@/app/components/Add";

function SinglePage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative  flex flex-col lg:flex-row gap-16">
      {/*{image}*/}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/*{text}*/}
      <div className="w-full flex flex-col lg:w-1/2 gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nobis, ratione?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">49$</h3>
          <h2 className="font-medium text-2xl">55$</h2>
        </div>
        <div className="h-[2px] bg-gray-100 " />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            impedit nesciunt nihil numquam recusandae vero, voluptatibus. Amet
            et repellendus saepe.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            impedit nesciunt nihil numquam recusandae vero, voluptatibus. Amet
            et repellendus saepe.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            impedit nesciunt nihil numquam recusandae vero, voluptatibus. Amet
            et repellendus saepe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
