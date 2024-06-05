// import React from 'react'
import { motion,useScroll} from "framer-motion";

import { services } from "../Constant";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  useScroll({
    target:'',
    offset:["0 1"," 1.33 1"]
  })
  return (
    <motion.section
      className=" max-container flex  justify-center items-center flex-wrap gap-9"
      id="services"
    >
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </motion.section>
  );
};

export default Services;
