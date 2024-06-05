import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import NormalShopButton from "./NormalShopButton";
import { AnimatePresence, motion } from "framer-motion";
function Modal({ open, details, onClose }) {
  const dialog = useRef();
  console.log(details);
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <AnimatePresence>
    <motion.dialog
    initial={{opacity:0,y:30}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:30}}
      onClose={onClose}
      onClick={(event) => onClose(event)}
      ref={dialog}
      className="transition ease-in-out duration-[0.5s] m-auto   p-8 w-[30%] max-xl:w-[60%] max-lg:w-[70%] max-lg:p-4 max-sm:w-[90%] rounded-lg  overflow-scroll"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className=" modal relative rounded-xl flex flex-col  justify-start items-start p-4 "
      >
        <img
          src={details.src}
          alt={` ${details.name} image`}
          className="   object-cover   rounded-xl"
        />
        <ul className=" mt-4">
          <li className="  border-l-4 border-coral-red">
            {" "}
            <h4 className=" ml-2   text-2xl font-bold font-montserrat text-coral-red">
              {" "}
              {details.title}
            </h4>
          </li>
    
          <li className="  mt-4 font-bold border-l-4 border-coral-red   text-xl mb-4  font-montserrat  text-coral-red">
         <span className=" ml-2 font-bold"> &#8377; {details.price}</span>
          </li>
          <li>
            <div
              className="  outline-none   "
              
              autoFocus={open}
            >
              <NormalShopButton href={"https://www.youtube.com/watch?v=AX6OrbgS8lI"} />
            </div>
          </li>
        </ul>
      </motion.div>
      <form method="dialog" className=" absolute top-2 right-3">
        <button onClick={onClose} className=" text-xl">
          &#10006;
        </button>
      </form>
    </motion.dialog>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}

export default Modal;
