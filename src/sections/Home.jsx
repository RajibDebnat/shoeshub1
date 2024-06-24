import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes } from "../Constant";
import LoadingImage from "../components/img";
import HomeButton from "../components/buttons/HomeButtons";
import LearnMore from "../components/buttons/LearnMore";
import { useState } from "react";

const Home = () => {

const  [mainImg , setMainImg]= useState(bigShoe1)

const handleImg = (src)=>{
  setMainImg(src)
}

  return (
    <section className="mb-16 max-md:px-4  px-8">
      <div className="grid grid-cols-2 max-lg:grid-cols-1  gap-10 max-lg:items-center bg-hero">
        <div className="">
          <span className=" max-sm:text-[18px] inline-block text-2xl font-roboto-mono text-coral-red font-bold">
            Unleash Your Sneaker Game
          </span>
          <h1 className= " max-sm:text-[38px] text-white font-roboto mt-4 text-4xl lg:text-[70px] leading-[1.1] font-bold">
            Discover the Ultimate Collection of
            <span className="text-coral-red"> Premium Sneakers </span>
          </h1>
          <p className=" max-md:text-[15px] font-montserrat mt-4 text-lg lg:text-[17px] font-medium text-para-color leading-7 pr-0 lg:pr-28">
            At Shoes Hub, discover top-notch sneakers that blend style, comfort,
            and performance. From iconic Air Jordans to classic Air Force and
            Retro series. <span className=" max-sm:hidden"> our curated collection will elevate your sneaker game.
            Find your perfect pair and step up your style today.</span>
          </p>
          <div className="mt-6 flex items-center gap-8 max-sm:flex-wrap">
            <HomeButton label={"SHOP NOW"} />
            <LearnMore />
          </div>
        </div>
        <div className="flex flex-col relative mt-8 lg:mt-0  z-40 max-lg:self-center">
          <LoadingImage
            src={mainImg}
            alt={"home"}
            className={"object-contain transform rotate-[-30deg] relative z-40"}
          />
          <div className="  max-sm:right-[-10%]  max-md:flex-col  gap-2 z-50 flex absolute  bottom-0  max-md:bottom-[-20%] max-sm:bottom-[-40%] ">
            {shoes.map((shoe, index) => (
              <ShoeCard key={index} imgURL={shoe} {...shoe} onClick={handleImg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
