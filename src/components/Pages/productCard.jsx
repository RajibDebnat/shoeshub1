import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import Button from "../Button";
import { whatsAppLogo } from "../../assets/icons";
import handleShopNow from "../store/handleShopNow";
import ProductImg from "./ProductImg";

function ProductCard({ src, title, price, subprice ,discount ,detailsFunction}) {
  const [inView, setInView] = useState(false);
  const [isClick,setClick] = useState(false);
  const ref = useRef(null);
  const sliderRef = useRef(null);
  const { id, images } = src;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnFocus: true,
  };

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setInView(isInView);
  }, [isInView, setInView]);


// const handleClick =(Details)=>{
//   setClick(prev=>!prev);
// console.log(Details,isClick)
// }



  const parentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      stiffness: 100,
      damping: 5,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
const prices = price.trim();
  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      onClick={()=>detailsFunction(title)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative overflow-hidden hover:skew-x-1 origin-top-right hover:shadow-lg transition-all duration-[0.5s] flex flex-col  justify-evenly  max-xl:p-4 pt-4 p-6 pb-4 max-sm:p-1 rounded-md bg-white "
    >
      <div className="w-full  max-sm:mb-2 overflow-hidden">
        {/* <Slider className="text-center" ref={sliderRef} {...settings}> */}
          {/* {images.map((src) => ( */}
            <ProductImg  price={+price} subprice={+subprice}  src={src} alt={title} />
          {/* // ))} */}
        {/* </Slider> */}
      </div>

      <div className="flex flex-col mt-8 max-md:mt-5  px-1">
        <h4 className="max-md:text-[15px] font-roboto-mono text-[18px] mt-[-20px] font-normal text-slate-900 ">
          {title}
        </h4>
        <p className="mt-2 max-md:mt-2 max-md:mb-1 mb-3 font-roboto-mono text-md font-semibold text-slate-900 ">
          <span className="">
            <span className="text-xl mr-1">&#8377;</span>{prices}
          </span>{" "}
          <span className="text-slate-500 line-through font-roboto-mono">
            {subprice}
          </span>
        </p>
      </div>

      <Button
        onClick={handleShopNow}
        label="shop now"
        imgURL={whatsAppLogo}
        imgWidth={25}
        className="focus:outline-none transition-shadow duration-[0.3s] hover:shadow-[0_3px_1px_rgba(144,37,25,0.5)] cursor-pointer"
        textSize="text-[16px]"
        padding="px-4 py-2"
        fullWidth='true'
      />
    </motion.div>
  );
}

export default ProductCard;
