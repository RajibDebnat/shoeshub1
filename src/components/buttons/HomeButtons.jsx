import React from "react";
import { motion } from "framer-motion";
function HomeButton({ label }) {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.06 }}
        transition={{ easings: "easeInOut", duration: 0.3 }}
        className=" text-[16px] font-semibold text-white px-6 py-3  bg-mid-coral  rounded-full"
      >
        {label}
      </motion.button>
    </div>
  );
}

export default HomeButton;
