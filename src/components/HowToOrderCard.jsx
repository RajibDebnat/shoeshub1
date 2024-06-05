// import LinkButton from "./LinkButton";
import handleShopNow from "./store/handleShopNow";
import Button from "./Button";
import { whatsAppLogo } from "../assets/icons";
function HowToOrderCard({ imgUrl: shoe4, className, number, numLastWord }) {
  return (
    <div
      className={`${
        className ? className : null
      } flex  flex-1  gap-8 lg:gap-14  px-3 lg:px-10 justify-start md:justify-center  items-center mt-6  mb-12 lg:mb-36  max-md:flex-wrap `}
    >
      <div className=" max-md:max-w-[90%] max-w-[50%]">
        <h3 className=" flex flex-col text-4xl  max-sm:text-[50px] font font-bold text-slate-300 mb-4   font-montserrat">
          <span className=" max-md:text-[68px]   font-montserrat  text-slate-300/20 text-8xl   max-md:leading-[1.4] ">
            0{number || 1}
          </span>
          {number || 1}
          {numLastWord || "st"} Step
        </h3>
        <p className="  font-palanquin text-xl leading-8  info-text mb-10 max-sm:text-[16px]">
          Learn More button can expand the details section to reveal more
          information about the shoe, while the View Details button can scroll
          the page down to the expanded section or trigger a smooth scroll
          animation to bring users directly to the detailed information
        </p>
        {/* <LinkButton
              label="Learn More"
              href={"Learn-More"}
              textColor="text-slate-gray"
              className={" max-sm:py-4 max-sm:text-[16px] max-sm:px-5 "}
            /> */}
        <Button
          onClick={handleShopNow}
          label="Shop Now"
          imgURL={whatsAppLogo && whatsAppLogo}
          className={" max-sm:text-[16px]"}
          padding={" px-4 py-3 max-md:px-3 max-md:py-1  p-2"}
        />
      </div>
      <div>
        <img src={shoe4} width={420} height={784} />
      </div>
    </div>
  );
}

export default HowToOrderCard;
