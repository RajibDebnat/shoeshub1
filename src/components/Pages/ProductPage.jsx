// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allProducts } from "../../Constant";
import ProductCard from "./productCard";

function ProductPage() {
  console.log(allProducts);

  return (
    <section className="   p-14 max-md:p-6 max-sm:p-[0px] bg-slate-900">
      <div className=" bg-slate-800  rounded-md p-10   max-md:p-4">
        <p className="  text-dim text-[18px]   font-roboto-mono font-semibold tracking-wide">
          ALL PRODUCTS
        </p>
        <h1 className=" max-md:text-[35px]    text-4xl  leading-[1.1]  font-bold text-white ">
          Explore Our Stylish{" "}
          <span className=" text-coral-red">Shoe Collection</span>
        </h1>
        <div className=" b py-7 mt-8 grid grid-cols-4 gap-10 max-xl:gap-6  max-xl:grid-cols-3   max-lg:grid-cols-2 max-sm:grid-cols-2   max-sm:gap-2 max-sm:p-[0]">
          {allProducts.map((product) => {
            return (
              <ProductCard
                key={product.title}
                src={product.src}
                alt={product.title}z
                title={product.title}
                price={product.price}
                discount={product.discount}
                // size={product.size}
                subprice={product.subPrice}
              />
            );
          })}
          {/* {falseData.map((names, index) => {
            return (
              <ProductCard
                key={names + index}
                title={"title"}
                price={"price"}
                size={"size"}
                names={names}
              />
            );
          })} */}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
