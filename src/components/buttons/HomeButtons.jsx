import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HomeButton({ label }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.open("https://api.whatsapp.com/send?phone=919593623365", "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.06 }}
        transition={{ easings: "easeInOut", duration: 0.3 }}
        className="text-[16px] font-semibold text-white px-6 py-3 bg-mid-coral rounded-full"
        onClick={handleClick}
      >
        {label}
      </motion.button>
    </div>
  );
}

export default HomeButton;
