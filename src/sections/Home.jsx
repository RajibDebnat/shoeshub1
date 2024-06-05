// import React from 'react'
import ShoeCard from "../components/ShoeCard";
import { bigShoe1, HeroBackground } from "../assets/images";
import Button from "../components/Button";
import { bigShoe3 } from "../assets/images";

import { shoes, statistics } from "../Constant";
import { useState } from "react";
import { motion } from "framer-motion";
import { whatsAppLogo } from "../assets/icons";
// import {useHistory} from 'react-router-dom';
import handleShopNow from "../components/store/handleShopNow";

import LoadingImage from "../components/img";
const Home = () => {
  const [currentImg, setCurrentImg] = useState(bigShoe3);
  // console.log("hello");
const [isId,setIsId] = useState('s1')
  const changeBigShoeImgHandler = function (shoesUrl,shoesId) {
    // console.log(shoesUrl);
    setCurrentImg(shoesUrl);
    setIsId(shoesId)
  };
  function handleShop() {
    // const history = useHistory();
    handleShopNow();
  }
  let priceWithId = '423';
  if(isId==="s1"){
    priceWithId = '1,399';
  } else if(isId==="s2"){
    priceWithId = "1,299";
  }else {
    priceWithId ="1,699"
  }

  return (
    <section
      id="home"
      className=" pt-3 w-full flex  xl:flex-row flex-col relative top-[-143px]  min-h-screen gap-10 max-container"
    >
      <motion.div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-sm:px-1 pt-28">
        <p className=" mt-5  uppercase  font-normal tracking-wider text-xl font-poetsen-one  text-coral-red max-sm:text-[18px]">
          Our Trendy Collections{" "}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: eval, delay: 0.6, duration: 0.3 }}
          className="  mt-10  leading-[0.9]  text-[84px] max-sm:text-[52px] max-md:leading-[1] font-bold bg-slate-900 text-white "
        >
          <span className="   font-noto-sans  tracking-tight  text-white xl:whitespace-nowrap relative  z-[7] pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red mt-3 inline-block">Shoes hub </span> Shoes
        </motion.h1>
        <p
          className="   font-roboto-mono text-slate-400  text-lg leading-8 mt-6 mb-14 sm:pr-12 max-sm:text-[16px]
        max-xl:max-w-96 max-md:mb-7"
        >
          Discover Stylish Shoes hub arrivals, quality comfort, and innovation for
          your active life
        </p>
        <div className=" flex  justify-between gap-4 items-center  ">
          <span className="  text-[40px] font-bold text-white    font-roboto-mono">
          <span className=" text-[40px] mr-1">&#8377;</span>{
            priceWithId
           }
          </span>
          <Button
            onClick={handleShop}
            label="Shope Now"
            imgURL={whatsAppLogo && whatsAppLogo}
            className={" rounded-3xl"}
            padding={" px-3 py-2"}
          />
          <div>

          </div>
        </div>
        <div className="flex justify-start items-start gap-14 mt-10 max-md:mt-6 max-sm:gap-7 text-white">
          {statistics.map((stat) => (
            <div key={stat.id}>
              <p className=" text-4xl max-sm:text-3xl     font-poetsen-one   font-bold">
                {stat.value}
              </p>{" "}
              <p className=" leading-7  font-noto-sans  tracking-wider text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <div className=" relative   flex-1 flex justify-center items-center xl:min-h-screen max-md:py-0   max-xl:py-40 bg-hero  bg-cover bg-center">
        <motion.div
        className=" transform "
          key={currentImg}
          initial={{ opacity: 0, translateY: -150 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 5,
            type: "spring",
            stiffness: 100,
            damping: 5,
          }}
          loading="lazy"
        >
          <LoadingImage
            src={currentImg}
            alt="hero shoe image"
            className=" object-contain rotate-[-30deg]"
          />
       
        </motion.div>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:-bottom-[40%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe.id} className=" ">
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={() => changeBigShoeImgHandler(shoe.bigShoe,shoe.id)}
                bigShoeImg={currentImg}
                label={shoe.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
