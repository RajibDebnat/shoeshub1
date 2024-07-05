import React from "react";
import { createPortal } from "react-dom";
function ProductModal({ name }) {
  return (
        <div className=" max-w-full  ">

      <div className=" max-w-[800px]  mx-auto ">
        <h1 className="  bg-red-500 text-white">Hello</h1>
      <h1>{name}</h1>
    </div>
        </div>
    
  );
}

export default ProductModal;
