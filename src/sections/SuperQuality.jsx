// import React from 'react'
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { whatsAppLogo } from "../assets/icons";
// import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" max-sm:px-2 px-28 relative flex justify-between items-center max-lg:flex-col gap-10 w-full bg-slate-900 max-container"
    >
      
      <div className=" flex   basis-[70%] flex-col">
        <h2 className=" text-white  max-md:leading-[1.1] max-sm:text-[35px]  leading-tight   font-noto-sans text-4xl capitalize font-bold 
        // lg:max-w-xl
         max-lg:max-w-lg"
        >
          We provide you
          <span className=" text-coral-red"> Super quality</span> Shoes
        </h2>
        <p className="mt-4 para-text max-sm:text-[16px]  text-slate-400">
          Dive into our premium shoe collection, crafted with exquisite
          materials and unparalleled attention to detail. Elevate your style
          with our superior quality footwear, designed for comfort and
          sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg para-text max-sm:text-[16px]">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <LinkButton label="View Details" imgURL={arrowRight} href={"view-details"} />
          {/* <LinkButton to={"view-details"}>click</LinkButton> */}
        </div>
      </div>
      <div className="flex basis-[40%] justify-center items-center">
        <img
          src={shoe8}
          alt="supar quality shoe photo"
          height={700}
          width={700}
          className=" rounded-xl object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
