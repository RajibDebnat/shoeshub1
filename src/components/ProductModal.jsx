import React from "react";
import { createPortal } from "react-dom";
import { close } from "../assets/icons";
function ProductModal({ name, closeModal }) {
  return createPortal(
    <div
      onClick={() => {
        closeModal();
      }}
      className="     w-lvw h-lvh fixed top-0 left-0 z-20 bg-slate-800  bg-opacity-80 flex justify-center items-center"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="  relative h-[700px] w-[700px]  opacity-100 bg-white  mx-auto rounded-2xl "
      >
        <img
          onClick={() => {
            closeModal();
          }}
          src={close}
          alt="close icon"
          className="  w-[24px] absolute right-7 top-7  z-50"
        />
        <div className="">
          <img src="" alt="shoe image" />
          <ul className=" flex  flex-col gap-4  absolute left-0  p-8">
            <li
              onClick={() => {
                console("hello world");
              }}
              className=" bg-red-600 w-[100px] h-[100px] rounded-xl"
            >
              {" "}
              Hello
            </li>
            <li
              onClick={() => {
                console("hello world");
              }}
              className=" bg-red-600 w-[100px] h-[100px] rounded-xl"
            >
              {" "}
              Hello
            </li>
            <li
              onClick={() => {
                console("hello world");
              }}
              className=" bg-red-600 w-[100px] h-[100px] rounded-xl"
            >
              {" "}
              Hello
            </li>
          </ul>
        </div>

        <h1 className="   text-white">Hello</h1>
        <h1>{name}</h1>
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export default ProductModal;
