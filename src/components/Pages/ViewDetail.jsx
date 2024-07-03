// import { useLocation } from "react-router"
import { motion } from "framer-motion";
import { socialMedia } from "../../Constant";
import { jordan1, jordan2, jordan3 } from "../../assets/images";
import ViewDetailsFeatures from "./ViewDetailsFeatures";
import { DetailsFeatures, FAQs } from "../../Constant";
// import { useLocation } from "react-router";
import ViewDetailsSub from "./viewDetailsSub";
import { DetailsImg } from "../../assets/images";
import FaqLogic from "./FaqLogic";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ViewDetail() {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [pathname]);

  console.log(pathname); // Ensuring you are getting the correct pathname

  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-main-bg  max-sm:px-3 max-md:px-8 "
    >
      <section className="  max-md:p-8 max-sm:p-3 p-16 rounded-xl  ">
        {/* <ViewDetailsSub imgURL={jordan1} />
        {DetailsFeatures.map((data, index) => (
          <ViewDetailsFeatures key={data.title} index={index} {...data} />
        ))} */}
        <div className=" bg-slate-800 rounded-2xl">
        <div className=" text-center flex justify-center  ">
          <img
            src={DetailsImg}
            alt="shoes hub details image"
            width={800}
            className=" object-contain rounded-lg "
          />
        </div>
        <div className=" max-md:grid-cols-1 grid grid-cols-2 mt-8">
          <div className="container mx-auto px-4  border-r-[1px]  border-y-slate-gray">
            <div className="rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-[30px]  text-white   font-bold mb-4  ">
                  About Us
                </h1>
                <h2 className="text-2xl   text-gray-200 font-semibold mb-4">
                  Your Gateway to Trendy Fashion and Affordable Style
                </h2>
                <p className="mb-4 text-gray-300">
                  At <span className="font-bold">Shoes Hub</span>, we believe
                  that fashion is a powerful tool for self-expression and
                  empowerment. We are committed to providing a curated
                  collection of trendy and high-quality footwear that reflects
                  the vibrant spirit of today's generation. Our mission is to
                  make fashion accessible and enjoyable for everyone, without
                  compromising on style or quality.
                </p>
                <h3 className="text-[20px]  text-white font-semibold mb-2">
                  Why Choose <span className="font-bold">Shoes Hub</span>?
                </h3>
                <ul className="list-disc list-inside mb-4  text-gray-200">
                  <li className="mb-2 ">
                    <strong>Trendy and Stylish Designs:</strong> We stay ahead
                    of the curve, constantly updating our collection with the
                    latest fashion trends and styles. Whether you're looking for
                    streetwear classics or modern designs, we have something for
                    everyone.
                  </li>
                  <li className="mb-2">
                    <strong>High-Quality Products:</strong> We never sacrifice
                    quality for style. Our products are crafted from premium
                    materials and undergo rigorous quality control checks to
                    ensure durability and comfort. We believe you deserve to
                    look and feel your best without worrying about the quality
                    of your shoes.
                  </li>
                  <li className="mb-2">
                    <strong>Affordable Prices:</strong> We understand that
                    fashion should be accessible to everyone. Our prices are
                    carefully structured to fit your budget, without
                    compromising on the quality or style of our products. We
                    believe that everyone should have the opportunity to express
                    themselves through fashion without breaking the bank.
                  </li>
                  <li className="mb-2">
                    <strong>Free Shipping:</strong> We want to make shopping
                    even more affordable and hassle-free. We offer free shipping
                    on prepaid orders, so you don't have to worry about
                    additional delivery charges. (Shipping charges will be
                    applicable on cash on delivery orders)
                  </li>
                  <li>
                    <strong>Cash on Delivery Convenience:</strong> We want to
                    make shopping easy and convenient for you. We offer cash on
                    delivery all over India so you can pay for your order when
                    you receive it. (Shipping charges have to be paid in
                    advance)
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-2  text-gray-200">
                  Our Commitment To You
                </h3>
                <p className="mb-4 text-gray-300">
                  At <span className="font-bold  text-gray-200">Shoes Hub</span>
                  , our customers are at the heart of everything we do. We are
                  passionate about providing an exceptional shopping experience
                  that exceeds your expectations. We are committed to:
                </p>
                <ul className="list-disc list-inside mb-4  text-gray-200">
                  <li className="mb-2">
                    Curating a trendy and stylish collection that reflects your
                    unique style.
                  </li>
                  <li className="mb-2">
                    Offering high-quality products at affordable prices.
                  </li>
                  <li className="mb-2">
                    Providing convenient cash on delivery and free shipping
                    options.
                  </li>
                  <li>
                    Delivering an exceptional customer experience that leaves
                    you satisfied.
                  </li>
                </ul>
                <p className="mb-4 text-white">
                  Join us on our journey to redefine fashion and discover the
                  perfect style that reflects your true essence. Shop now at{" "}
                  <span className="font-bold">Shoes Hub</span> and embrace the
                  confidence and style that comes with it.
                </p>
               
              </div>
            </div>
          </div>
          <div className=" px-6">
            <h3 className=" text-2xl font-bold text-slate-200   font-montserrat">Location</h3>
            <p className=" text-slate-300 font-poppins">
              Alipurduar buxa feeder road, MahakalDham, Alipurduar,West bengal -
              736123, India.
            </p>
            <h4 className=" text-slate-300 text-xl font-bold  mt-5 font-montserrat">Contact With Us:</h4>
            <div className="  flex gap-3 my-4 ">

            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className=" flex justify-center  w-12 h-12 items-center  rounded-full "
              >
                <a key={icon.alt} href={icon.href} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    height={50}
                    width={50}
                    className="  border-2 p-1 bg-white border-white  rounded-[50%] "
                    />
                </a>
              </div>
            ))}
           
            </div>
            <p className=" font-semibold text-gray-400 mt-8">
                  <strong>Timings:</strong> 12 AM - 12 AM
                </p>
                <p className=" font-semibold  text-gray-400">
                  <strong>Delivering To:</strong> All Locations
                </p>
                <p className=" font-semibold  text-gray-400">
                  <strong>Connect with us:</strong>
                  <br />
                  <span className=" text-gray-400">
                    Email: shoeshubapd@gmail.com
                  </span>
                  <br />
                  <span className="  text-gray-400">Phone: 9593623365</span>
                </p>
          </div>
        </div>
        </div>
      </section>

      <section id="FAQ" className="max-sm:px-4 mt-16 px-10 py-8">
        <p className="font-montserrat text-xl font-bold  text-coral-red">
          FAQ
        </p>
        <h2 className=" text-slate-100 max-md:text-[48px] font-palanquin text-[58px] font-bold max-sm:leading-[1.1] leading-[1.2]">
          Frequently Asked Questions{" "}
          <span className="text-coral-red">(FAQ)</span>
        </h2>
        <p className="  max-sm:max-w-[100%] max-lg:max-w-[70%] xl:max-w-[40%] mb-10 font-montserrat text-slate-300 text-lg leading-9 mt-3">
          Everything You Need to Know About Ordering, Payments, and More!
        </p>
        {FAQs.map((data, index) => (
          <FaqLogic
            key={data.question}
            index={index + 1}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </section>
    </motion.main>
  );
}
export default ViewDetail;
