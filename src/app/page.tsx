import Slider from "@/app/components/Slider";
import ProductList from "@/app/components/ProductList";
import Footer from "@/app/components/Footer";
import CategoryList from "@/app/components/CategoryList";
import NewProducts from "@/app/components/NewProducts";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-end ">
      <Slider />
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className={"text-2xl"}>Featured Products</h1>
        <ProductList />
      </div>
      <div className=" text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 ">
        <h1 className={"text-2xl"}>Categories</h1>
        <CategoryList />
      </div>
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className={"text-2xl"}>New Products</h1>
        <NewProducts />
      </div>
    </div>
  );
};

export default HomePage;
