import { products } from "../Constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularProductCard from "../components/PopularProductCard";
import responsive from "../components/responsive";
import Modal from "../components/Modal";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
function PopularProduct({ deviceType }) {
  const product = useRef(null);

  const [details, setDetails] = useState({});
  const [open, isOpen] = useState(false);
  function getProductDetailsHandler(data) {
    console.log(data);
    setDetails(data);
    isOpen(true);
  }

  function closeModalHandler() {
    isOpen(false);
  }

  return (
    <>
      <Modal open={open} details={details} onClose={closeModalHandler} />

     
      <motion.section
        ref={product}
        id="products"
        className=" max-container max-sm:mt-12 relative"
      >
        <div className=" flex flex-col justify-start gap-5 max-sm:gap-2">
          <h2 className=" text-4xl max-sm:text-[35px]    font-noto-sans font-bold text-white">
            Our <span className=" text-coral-red">Popular </span>Products
          </h2>
          <p className="   font-roboto-mono text-lg  max-sm:text-[16px] text-slate-400 leading-8 max-w-[740px] lg:max-w-lg ">
            Explore our curated selection of must-have items in our Popular
            Products section. Discover trending styles today!
          </p>
        </div>
        <Carousel
          ssr={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          infinite={true}
          className=" flex "
        >
          {products.map((product) => (
            <PopularProductCard
              onClick={getProductDetailsHandler}
              key={product.title}
              {...product}
            />
          ))}
        </Carousel>
      </motion.section>
    </>
  );
}

export default PopularProduct;
