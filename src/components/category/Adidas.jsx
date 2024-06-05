import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { adidasLogo } from "../../assets/images";
import AdidasCard from "./subCategory/AdidasCard";
import { adidasData } from "../../Constant";

function Adidas() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <section className="max-md:p-4 pb-10 px-60 max-lg:px-10 max-sm:flex max-sm:flex-col max-sm:justify-center">
        <div className="mb-8 flex flex-col items-start">
          <img src={adidasLogo} alt="adidasLogo" height={100} width={100} />
          <h2 className="text-xl font-bold font-montserrat">
            ADIDAS COLLECTIONS
          </h2>
        </div>
        <div className="flex gap-4 flex-wrap max-sm:grid max-sm:grid-cols-2">
          {adidasData.map((data) => (
            <AdidasCard
              key={data.title}
              discount={data.discount}
              price={data.price}
              src={data.src}
              subprice={data.subPrice}
              title={data.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Adidas;
