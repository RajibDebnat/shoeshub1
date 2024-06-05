import { shopping } from "../assets/icons";
import handleShopNow from "./store/handleShopNow";
function NormalShopButton({href,pad,pw,src}) {
  // pw=parent width
  return (
    <div className={`w-${pw?pw:'full'}`}>
        <a onClick={handleShopNow} href={href} className={`   focus:outline-none cursor-pointer   rounded-3xl flex  gap-2  justify-center items-center  border ${pad?pad:'py-[6px] px-5'} hover:border-coral-red border-mid-coral transition duration-200  bg-mid-coral  ease-out `}>
        <span className="  font-palanquin font-semibold text-white">Shop Now</span>{" "}
        <img src={src||shopping} width={30} height={26} className="  bg-white  rounded-xl p-1" />
      </a> 
    </div>
  );
}

export default NormalShopButton;
