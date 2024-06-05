import React from "react";
import { whatsAppLogo } from "../../../assets/icons";
import Button from "../../Button";
import handleShopNow from "../../store/handleShopNow";
import { motion } from "framer-motion";

function AdidasCard({ price, src, subprice, title, discount }) {
  console.log(subprice)
  return (
    <div className="cursor-pointer   shadow-md shadow-slate-200 p-2 flex flex-col justify-between ">
      <div className="relative">
        <motion.img
          src={src}
          alt={title}
          className="object-cover w-full h-[200px] max-sm:h-[180px]"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <span className="bg-coral-red text-[12px] p-1 absolute top-2 right-0">
          {discount} off
        </span>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-[1.7] font-roboto-mono text-[14px]">{title}</p>
        <p className="w-full mb-3 font-roboto-mono flex gap-2 tracking-tight font-semibold">
          <span>&#8377;{price}</span>
          <span className="text-slate-500 line-through">{subprice}</span>
        </p>
        <Button
          onClick={handleShopNow}
          label="shop now"
          imgURL={whatsAppLogo}
          imgWidth={25}
          className="w-full focus:outline-none transition-shadow duration-300 hover:shadow-md cursor-pointer text-[14px]"
          padding={'px-4 py-3 max-md:px-2 max-md:py-[6px] '}
          fullWidth="true"
        />
      </div>
    </div>
  );
}

export default AdidasCard;
