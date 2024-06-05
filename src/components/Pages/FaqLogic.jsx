import { downIcon } from "../../assets/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FaqLogic({ index, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleFaq() {
    setIsOpen((prev) => !prev);
  }
  return (
    <AnimatePresence>
    <motion.div
      animate={{ height: "auto" }}
      exit={{height:"auto"}}

      key={question}
      className="  max-sm:max-w-[100%] max-w-[80%] lg:max-w-[50%]  mx-auto  mb-3 "
    >
      <div
        onClick={handleFaq}
        className=" gap-x-3 flex justify-between  bg-white border rounded-t-xl  p-4"
      >
        <h3 className=" max-sm:text-[16px] text-xl leading-5  font-palanquin font-semibold text-slate-700  ">
          <span className="  text-coral-red text-2xl  mr-2 pr-1">{index}</span>
          {question}
        </h3>
        <motion.img
          animate={{ rotate: isOpen ? 180 : 0 }}
          src={downIcon}
          alt="down icon"
          width={20}
          height={20}
          className=" rounded-full cursor-pointer"
        />
      </div>
      
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            layout
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{duration:0.1, stiffness:100, damping:9, ease:eval}}
            className="px-4"
          >
            <p className="bg-primary p-2 rounded-b-xl font-montserrat leading-7 font-medium text-slate-600">
              {answer}
            </p>
          </motion.div>
        )}
    </motion.div>
      </AnimatePresence>
  );
}

export default FaqLogic;
