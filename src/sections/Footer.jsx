// import React from 'react'
import { Link } from "react-router-dom";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constant";
// import { useState } from "react";
import { headerLogo } from "../assets/images";
const Footer = () => {
  function   handleProductLink(data){
    console.log(data)
  }
  return (
    <footer id="contact-us" className="max-container  bg-slate-300">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:">
        <div className=" flex flex-col items-start">
          <a className="" href="/">
            <img className="" src={headerLogo} width={150} height={46} />
          </a>
          <p className=" mt-6 text-base  leading-7 font-montserrat text-slate-800 sm:max-w-sm">
            Discover stylish, comfortable shoes for every occasion. Step into
            fashion and comfort with our curated collection. Find your perfect
            pair today
          </p>
          <div className=" flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className=" flex justify-center  w-12 h-12 items-center bg-mid-coral rounded-full "
              >
                <a key={icon.alt} href={icon.href} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    height={24}
                    width={24}
                    className="  bg-mid-coral rounded-[50%] file:text-coral-red"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1  flex-wrap justify-between gap-20 lg:gap-10">
           {/* <p className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                Boxa Feedar Road, Alipurduar-I, West Bengal-736123
                </p> */}
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h4 className=" text-slate-800 font-montserrat text-2xl  leading-normal font-medium mb-0 ">
                {link.title}
              </h4>
              <ul>
                {link.links.map((linkItem) => (
                  <li
                  onClick={()=>handleProductLink(linkItem)}
                    className="mt-3 text-slate-800font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={linkItem.name}
                  >
                    <a href={linkItem.link}>{linkItem.name}</a>
                  </li>
                ))}
               
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex  justify-between text-slate-800 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2  font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className=" bg-mid-coral rounded-full m-0"
          />
          <p>Copyright . All right reserved. </p>
        </div>
        <p className=" text-slate-800 font-montserrat cursor-pointer"><Link to={`termsandcoditions`}>Terms & Conditions </Link></p>
      </div>
    </footer>
  );
};

export default Footer;
