import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { } from "framer-motion";
import { cross } from "../assets/icons";
import { Context } from "./store/Context";
import { useLocation } from "react-router-dom";
const ViewDetailsNav = () => {
  const location = useLocation();
  const {isHomeOut} = useContext(Context)
  console.log(isHomeOut)
  const [nav,setNav] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  function navHandler() {
    setIsOpen((prev) => !prev);
  }
  const productNavDet = {
    title:'Product',
    src:'/product'
  }
  const ViewNavDet = {
    title:'Details',
    src:'/view-details'
  }
useEffect(()=>{
  location.pathname ==="/product"?setNav(true):setNav(false);
},[location.pathname])
  return (
    <header className=" padding-x pt-8 pb-4  z-10  relative w-full">
      <nav className=" flex justify-between  items-center  max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="max-lg:z-[40] max-lg:relative max-lg:bg-white rounded-xl"
          />
        </a>
        <motion.ul
          className={`flex flex-1 justify-end max-lg:p-20 max-sm:w-[300px]  max-lg:gap-y-4 max-lg:justify-start  max-lg:h-svh items-center max-lg:flex-col max-lg:absolute top-0 max-lg:right-0  gap-16 max-lg:z-[20]  max-lg:bg-light-coral-red  max-lg:bg-opacity-[95%] transition-all duration-[0.5s] ease-linear 
        ${
          isOpen ? "max-lg:translate-x-[0]" : "max-lg:translate-x-[100%]"
        } py-4   rounded-l-lg`}
        >
      
            <motion.li className=" cursor-pointer relative" >
              <Link
                layoutid="tab-idicator"
                onClick={navHandler}
                className=" hover:after:h-[2px] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 after:w-0 hover:after:w-full  after:posi after:transition-all after:duration-[0.5s] after:bg-tant-coral-red max-lg:text-tant-coral-red text-lg  font-medium transition-all duration-100 ease-linear hover:text-coral-red font-montserrat leading-normal  text-slate-gray lg:flex items-center gap-1" 
                to={".."}
              >
           <span className=" text-coral-red">&larr;</span> Back
              </Link>
            </motion.li>
            <motion.li className=" cursor-pointer relative" >
              <Link
                layoutid="tab-idicator"
                onClick={navHandler}
                className=" after:h-[2px]  after:block hover:after:absolute hover:after:bottom-0  after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-[0.3s] after:bg-tant-coral-red max-lg:text-tant-coral-red text-lg  font-medium transition-all duration-100 ease-linear hover:text-coral-red font-montserrat leading-normal  text-slate-gray lg:flex items-center gap-1" 
                to={`${!nav?productNavDet.src:ViewNavDet.src}`}
              >
              {`${!nav?productNavDet.title:ViewNavDet.title}`}
              </Link>
            </motion.li>
            <motion.li className=" cursor-pointer relative" >
             
            </motion.li>
  
        </motion.ul>
        <div className=" z-[40] lg:hidden " onClick={navHandler}>
          <motion.img
            layout
            whileTap={{ scale: [null, 1.5, 1.8] }}
            src={!isOpen ? hamburger : cross}
            height={10}
            width={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default ViewDetailsNav;
