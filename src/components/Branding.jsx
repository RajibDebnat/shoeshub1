import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { brand } from "../Constant";
function Branding() {
  return (
    <div className=" p-10 max-md:p-0">
      <ul className=" max-sm:grid max-sm:grid-cols-2 flex  justify-between gap-3 flex-wrap">
        {brand.map(data=>{

       return <li key={data.id} className=" flex justify-center flex-col items-center ">
          <Link to={data.href}>
            <motion.img whileTap={{scale:1.07}} whileHover={{scale:1.07}} transition={{duration:0.3}} height={180} width={180} src={data.src} className=" object-contain rounded-[50%]"  alt={data.title} />
          </Link>

          <h5 className=" text-slate-800 uppercase  font-montserrat   font-semibold">{data.title}</h5>
        </li>
        })}
      </ul>
    </div>
  );
}

export default Branding;
