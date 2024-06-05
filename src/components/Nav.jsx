import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks, shoeCategory } from "../Constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { } from "framer-motion";
import { cross } from "../assets/icons";
import { Context } from "./store/Context";
import { Link } from "react-router-dom";
const Nav = () => {
  const { isHomeOut } = useContext(Context);
  console.log(isHomeOut);
  const [isOpen, setIsOpen] = useState(false);
  function navHandler() {
    setIsOpen((prev) => !prev);
  }
  const [popUp, setPopUp] = useState(false);
  console.log(popUp && "hello world");
  return (
    <header className="  max-sm:pl-1 padding-x py-4  z-10  relative w-full  bg-gradient-to-r from-white via-slate-600  to-slate-900   ">
      <nav className=" flex justify-between  items-center  max-container">
        <a href="/" >
          <img
            src={headerLogo}
            alt="company logo"
            width={130}
            height={130}
            className="  max-lg:z-[40] max-lg:relativerounded-xl"
          />
        </a>
        <motion.ul
          className={`flex flex-1 justify-center max-lg:p-16  max-lg:justify-start  max-lg:h-svh items-center max-lg:flex-col max-lg:absolute top-0 max-lg:right-0  gap-16 max-lg:z-[20]  max-lg:max-w-[670px] max-lg:bg-slate-800  max-lg:bg-opacity-[95%] transition-all duration-[0.5s] ease-linear
        ${
          isOpen ? "max-lg:translate-x-[0]" : "max-lg:translate-x-[100%]"
        } py-4   rounded-l-lg`}
        >
          <li
            className=" relative cursor-pointer  "
            onMouseEnter={() => {
              setPopUp(true);
            }}
            onMouseLeave={() => {
              setPopUp(false);
            }}
            // onClick={navHandler}
          >
            <span className=" hover:after:h-[2px] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-[0.5s] after:bg-white max-lg:text-white text-md font-medium transition-all duration-100 ease-linear hover:text-coral-red   font-roboto-mono leading-norma    text-slate-300">
              Category
            </span>

            {popUp && (
              <ul className=" flex flex-col bg-white absolute top-[100%]  rounded-md  w-[200px]">
                {shoeCategory.map((catagory) => (
                  
                  <Link
                    onMouseEnter={() => {
                      setPopUp(true);
                    }}
                    onMouseLeave={() => {
                      setPopUp(false);
                    }}
                    className=" p-3 rounded-md  hover:bg-slate-200 transform  origin-left transition duration-[0.5s]  cursor-pointer py-2  text-sm     font-roboto-mono border-opacity-30  border-b border-slate-800  "
                    to={catagory.href}
                    key={catagory.id}
                    onClick={navHandler}
                  >
                    {catagory.label}
                  </Link>
                ))}
              </ul>
            )}
          </li>
          {navLinks.map((link) => (
            <motion.li className=" cursor-pointer relative" key={link.label}>
              <NavLink
                layoutid="tab-idicator"
                onClick={navHandler}
                className=" hover:after:h-[2px] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-[0.5s] after:bg-white max-lg:text-white text-md font-medium  transition-all duration-100 ease-linear hover:text-coral-red   font-roboto-mono leading-norma text-slate-300"
                to={link.href}
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
          <motion.li className=" cursor-pointer relative"></motion.li>
        </motion.ul>
        <div className=" z-[40] lg:hidden " onClick={navHandler}>
          <motion.img
            layout
            whileTap={{ scale: [null, 1.5, 1.8] }}
            src={!isOpen ? hamburger : cross}
            height={30}
            width={30}
            className=" object-contain   bg-mid-coral p-1 rounded-[50%]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
