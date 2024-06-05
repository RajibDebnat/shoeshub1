// import { useState } from "react";
import { star } from "../assets/icons";
// import handleShopNow from "./store/handleShopNow";
// import Modal from "./Modal";
import NormalShopButton from "./NormalShopButton";

function PopularProductCard({ src, title, price, rating,  onClick }) {
  const prices= price.trim();
  console.log(prices)
  return (
    <>
      <div
        onClick={() => onClick({ src, title, price, rating,  })}
        className=" gap-4 flex flex-col flex-1  justify-center  max-sm:w-full   transition  duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105  rounded-md  p-5"
      >
        <div className=" relative bg-white shadow-md    p-3 rounded-md">

        <img src={src} alt={name} className=" text-center m-auto object-contain rounded-md " />
        <div className=" mt-1 flex justify-start gap-2.5">
          <div className=" absolute top-3 right-3 flex gap-1  ">

          <img src={star} alt="rating star" width={24} height={24} />
          <p className="   text-slate-900 font-semibold font-roboto-mono text-lg   leading-normal ">
            {rating}
          </p>
          </div>
        </div>
        <h3 className=" text-slate-900 mt-1 text-[14px] leading-normal   font-roboto-mono ">
  {title}
        </h3>
        <p className=" mt-1 font-medium  font-roboto-mono text-[14px] leading-normal mb-3 text-slate-900">
         <span className=" text-[16px] mr-1">&#8377;</span>{prices}
        </p>
        {/* <NormalShopButton pad={' px-2 py-1 '} /> */}

        </div>
      </div>
    </>
  );
}

export default PopularProductCard;
