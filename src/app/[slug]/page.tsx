import React from "react";
import ProductImages from "@/app/components/ProductImages";

function SinglePage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative  flex flex-col lg:flex-row gap-16">
      {/*{image}*/}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/*{text}*/}
      <div className="w-full flex flex-col lg:w-1/2 gap-6">text</div>
    </div>
  );
}

export default SinglePage;
