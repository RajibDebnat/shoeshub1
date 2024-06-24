import {
  Home,
  Branding,
  // Footer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProduct,
  HowToOrder,
} from "./sections";
import { ContextProvider } from "./components/store/Context";

import Main from "./sections/Main";
import ProductPage from "./components/Pages/ProductPage";

const AllComponents = () => {
  return (
    <ContextProvider>
      <Main>
        {/* <Nav /> */}
        <section
          id="home"
          className="max-sm:py-1 xl:padding-l
        wide:padding-r 
         bg-main-bg 
       px-16 py-4  max-md:px-8 max-sm:px-4"

        >
          <Home />
        </section>
        <section className=" bg-gradient-to-b from-slate-900 via-slate-800 to-[#ffffff]  relative">
          {/* <div className=" max-md:hidden absolute top-[-70px] left-[0px]  h-[100px] pt- w-[110%] bg-slate-900  transform rotate-[-2deg]"></div> */}
          <div className=" p-4">
            <PopularProduct />
          </div>
        </section>
        <section className=" px-16 max-md:p-4" id="brands">
          <Branding />
        </section>
        <section id="all products">
          <ProductPage />
        </section>
        <section id="about-us" className=" bg-slate-900 relative">
          <div className=" max-md:hidden absolute top-[-100px] left-[0px]  h-[100px] pt- w-[110%] bg-slate-900  transform rotate-[-2deg]"></div>
          <div className=" py-7 px-5">
            <SuperQuality />
          </div>
        </section>
        <section className=" bg-slate-900 padding-x py-10">
          <Services />
        </section>
        <section className="  bg-gradient-to-b  from-slate-400 via-slate-900 to-slate-900 padding">
          <SpecialOffer />
        </section>
        {/* <section className=" padding bg-pale-blue">
        <CustomerReviews />
      </section> */}
        <section className=" padding bg-slate-900 max-sm:px-7">
          <HowToOrder />
        </section>
        <section className=" bg-gradient-to-r from-slate-400 via-slate-800  to-slate-900 padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
      </Main>
    </ContextProvider>
  );
};

export default AllComponents;
