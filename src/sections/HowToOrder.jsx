// import
// import { how } from "../assets/icons"
import { useEffect, useRef } from "react";
import { shoe4 } from "../assets/images";
import HowToOrderCard from "../components/HowToOrderCard";
import howToOrderVideo from "../assets/video/howToOrderVideo.mp4";
function HowToOrder() {
  const videoRef = useRef();
  useEffect(() => {
    if(howToOrderVideo){

      videoRef.current.play()
      console.log('video loaded')
    }
  },[]);
  return (
    <section className=" bg-slate-900  ">
      {/* text and image section  */}
      <div className="  ">
        <p className=" max-sm:text-[20px]   font-poetsen-one tracking-wider font-normal text-2xl  leading-4   text-coral-red">
          How To Order
        </p>
        <h2 className=" max-sm:text-[35px]  text-white max-md:text-[46px]  font-montserrat text-4xl font-bold  max-w-[50%] max-lg:max-w-[80%]  max-md:max-w-[90%]   leading-[1.2]  mt-4 ">
          Learn to Make{" "}
          <span className=" text-coral-red">Orders with WhatsApp</span>{" "}
          <span>
            <img src={``} />
          </span>
        </h2>
        <div className="">
          {/* <HowToOrderCard imgUrl={shoe4} /> */}
          <HowToOrderCard
            imgUrl={shoe4}
            number={2}
            className={" flex-row-reverse"}
            numLastWord="nd"
          />
          {/* <HowToOrderCard imgUrl={shoe4} number={3} numLastWord="rd" /> */}
        </div>
      </div>
      <div className=" flex justify-center">
        <video ref={videoRef} autoPlay  loop height={500} width={900} className=" rounded-2xl" muted>
          <source src={howToOrderVideo} type=" video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default HowToOrder;
