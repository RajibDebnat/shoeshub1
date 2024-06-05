import { Link } from "react-router-dom";
import { motion,  } from "framer-motion";
function LinkButton({  backColor, borderColor, textColor, className, label, imgURL, href,classNameImg }) {
  return (
    <div className="inline-block">
      <motion.span ><Link
        to={`/${href}`}
        className={`rounded-full flex hover:text-white   hover:bg-tant-coral-red transition duration-[0.5s] justify-center items-center gap-2 text-lg font-montserrat py-4 px-7 leading-none ${
          backColor ? `${backColor} ${borderColor} ${textColor}` : "bg-coral-red border-coral-red text-white"
        } ${className && className}  max-sm:text-[16px] max-sm:p-2`}
      >
        {label}
        {imgURL && <img width={30} src={imgURL} alt="Button Icon" className={classNameImg && classNameImg} />}
      </Link></motion.span>
    </div>
  );
}

export default LinkButton;