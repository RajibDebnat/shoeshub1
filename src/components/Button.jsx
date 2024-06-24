import { motion } from "framer-motion";
const Button = ({ type, label, imgURL, backColor, borderColor, textColor,fullWidth ,className,onClick ,padding,imgWidth,textSize,}) => {
  return (
    <div className="inline-block  ">

    <motion.button whileHover={{scale:1.05}} transition={{type:"spring", stiffness:100,duration:0.2 }} type={type} onClick={onClick}
      className={`  ${fullWidth && 'w-full'} w-full rounded-full flex justify-center items-center gap-2  ${textSize||"text-lg"}   font-noto-sans ${ padding ||"py-4  px-7"} leading-none max-sm:text-[14px] ${
        backColor
        ? `${backColor} ${borderColor} ${textColor}`
        : " bg-mid-coral border-coral-red text-white "
      } ${className&&className}`}
      >
      {label}
      {imgURL && <img width={imgWidth||30} className=" bg-white rounded-full" alt="whatsApp logo" src={imgURL} />}
    </motion.button>
      </div>
  );
};

export default Button;
