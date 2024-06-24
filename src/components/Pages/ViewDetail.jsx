// import { useLocation } from "react-router"
import { motion } from "framer-motion";
import { jordan1, jordan2, jordan3 } from "../../assets/images";
import ViewDetailsFeatures from "./ViewDetailsFeatures";
import { DetailsFeatures, FAQs } from "../../Constant";
// import { useLocation } from "react-router";
import ViewDetailsSub from "./viewDetailsSub";
import { DetailsImg } from "../../assets/images";
import FaqLogic from "./FaqLogic";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ViewDetail() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(pathname); // Ensuring you are getting the correct pathname

  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-sm:px-3 max-md:px-8 px-14"
    >
      <section className="bg-primary max-md:p-8 max-sm:p-3 p-16 rounded-xl">
        {/* <ViewDetailsSub imgURL={jordan1} />
        {DetailsFeatures.map((data, index) => (
          <ViewDetailsFeatures key={data.title} index={index} {...data} />
        ))} */}
        <div className=" text-center flex justify-center  ">
          <img src= {DetailsImg} alt="shoes hub details image"  width={800} className=" object-contain rounded-lg "/>
        </div>
      </section>

      <section id="FAQ" className="max-sm:px-4 mt-16 px-10 py-8">
        <p className="font-montserrat text-xl font-bold text-tant-coral-red">
          FAQ
        </p>
        <h2 className="max-md:text-[48px] font-palanquin text-[58px] font-bold max-sm:leading-[1.1] leading-[1.2]">
          Frequently Asked Questions <span className="text-coral-red">(FAQ)</span>
        </h2>
        <p className="max-sm:max-w-[100%] max-lg:max-w-[70%] xl:max-w-[40%] mb-10 font-montserrat text-slate-gray text-lg leading-9 mt-3">
          Everything You Need to Know About Ordering, Payments, and More!
        </p>
        {FAQs.map((data, index) => (
          <FaqLogic key={data.question} index={index + 1} question={data.question} answer={data.answer} />
        ))}
      </section>
    </motion.main>
  );
}
export default ViewDetail;
