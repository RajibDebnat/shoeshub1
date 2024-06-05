
// import { adidasLogo, YezzyBoost350 } from "../../assets/images";
import { retro4Data } from '../../Constant';
// import AdidasCard from "../subCategory/AdidasCard";
import AdidasCard from './subCategory/AdidasCard';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Retro() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <section className=" max-md:p-2 pb-10  px-60 max-lg:px-10 max-sm:flex max-sm:flex-col max-sm:justify-center ">
        <div className="  mb-8  flex  flex-col items-start ">
          {/* <img src={adidasLogo} alt="adidasLogo" height={100} width={100} /> */}
          <h2 className=" mt-10  text-xl font-bold   font-montserrat">
          RETRO 4 COLLECTIONS
          </h2>
        </div>
        <div className=" max-sm:justify-center flex flex-wrap gap-8 max-md:gap-4  max-sm:grid max-sm:grid-cols-2 ">
     {retro4Data.map(data=>{
      console.log(data.subPrice)
   return  <AdidasCard key={data.title} discount={data.discount} price={data.price} src={data.src} subprice={data.subPrice} title={data.title}/>
     })}
        </div>
      </section>
    </main>
  );
}

export default Retro