// import { useInView ,motion,useAnimation} from "framer-motion";
// import { useRef } from "react";





function ServiceCard({ imgURL, label, subtext }) {
  console.log("hello");
  return (
    <div className=" bg-slate-700 flex flex-1 flex-col sm:w-[350] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16 max-sm:px-10 max-sm:py-10">
      <div className=" w-11 h-11 flex justify-center items-center bg-mid-coral rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className=" text-slate-200 mt-5   font-noto-sans text-3xl leading-normal font-bold max-sm:text-[20px]">
        {label}
      </h3>
      <p className=" text-slate-400 mt-3 break-words font-montserrat text-lg leading-normal max-sm:text-[16px]">{subtext}</p>
    </div>
  );
}

export default ServiceCard;
