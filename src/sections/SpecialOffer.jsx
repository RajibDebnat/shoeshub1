// import React from 'react'
import Button from "../components/Button";
import { offer } from "../assets/images";

import handleShopNow from "../components/store/handleShopNow";
import { whatsAppLogo } from "../assets/icons";
import LinkButton from "../components/LinkButton";
const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-md:items-start  max-xl:flex-col-reverse gap-10 max-container">
      <div className="">
        <img
          src={offer}
          height={773}
          width={667}
          className=" object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col max-md:items-start ">
        <div>

        <h2 className="  font-palanquin text-4xl max-sm:text-[35px] text-white capitalize font-bold lg:max-w-lg">
          <span className=" text-coral-red"> Special </span>Offer
        </h2>
        <p className="mt-4  text-white lg:max-w-lg info-text  max-sm:text-[16px]">
          Dive into our premium shoe collection, crafted with exquisite
          materials and unparalleled attention to detail. Elevate your style
          with our superior quality footwear, designed for comfort and
          sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg info-text max-sm:text-[16px]">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        </div>
        <div className="mt-11 flex gap-4 max-sm:gap-2 flex-wrap">
          <Button
            onClick={handleShopNow}
            label="Shop Now"
            imgURL={whatsAppLogo && whatsAppLogo}
            className={" max-sm:text-[16px]"}
            
padding={"px-4 py-3 max-md:px-3 max-md:py-3  p-2"}

          />

          

          <LinkButton
            label="Learn More"
            i
            href={"Learn-More"}
            backColor=" bg-white"
            borderColor=" border border-slate-gray"
            textColor="text-slate-gray"
            className={" max-sm:py-4 max-sm:text-[16px] max-sm:px-5 "}
          />
          {/*padding,imgWidth,textSize     <Button  label="Learn More" backColor = ' bg-white' borderColor=" border border-slate-gray" textColor = "text-slate-gray" className={' max-sm:py-4 max-sm:text-[16px] max-sm:px-5 '}/> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
