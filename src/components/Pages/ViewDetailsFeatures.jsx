import { whatsAppLogo } from "../../assets/icons";
import Button from "../Button";
import handleShopNow from "../store/handleShopNow";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function ViewDetailsFeatures({
  src,
  className,
  title,
  subTitle,
  description,

  index,
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const container = useRef(null);
  const isInView = useInView(ref,{once:true});

  useEffect(() => {
    setInView(isInView);
  }, [isInView, setInView]);

  console.log(inView);

  return (
    <motion.div
      ref={container}
      key={title}
      className=" max-sm:mt-14 mt-24 my-9 max-sm:max-w-[100%] max-w-[90%] mx-auto"
    >
      <motion.div
          ref={ref}
        className={`${
          className ? className : ""
        } max-lg:flex-wrap items-center flex ${
          index % 2 == 0 && "flex-row-reverse"
        } max-lg:gap-y-8  max-xl:gap-x-20 gap-x-40 justify-center`}
      >
        <motion.div
      
          style={{
            transform: inView ? "none" : "translateX(-200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className=" max-lg:max-w-[100%] max-w-[50%]"
        >
          <p className=" text-xl font-bold font-montserrat  text-tant-coral-red mb-4 max-sm:mb-2">
            {subTitle}
          </p>

          <h2 className="  leading-[1.1] max-sm:leading-[1.4]   font-montserrat text-4xl max-sm:text-[30px] font-bold text-slate-800">
            {title}
          </h2>
          <p className=" text-slate-gray font-montserrat text-lg leading-7 mt-3 mb-8">
            {description}
          </p>
          <Button
            onClick={handleShopNow}
            label="Shope Now"
            imgURL={whatsAppLogo}
            className={" cursor-pointer"}
            padding={"px-3 py-3"}
          />
        </motion.div>
        <div>
          <motion.img
            style={{
              transform: inView ? "none" : "scale(0.7)",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className=" object-contain  rounded-xl"
            width={550}
            height={550}
            src={src}
            alt={`${title} image`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ViewDetailsFeatures;
