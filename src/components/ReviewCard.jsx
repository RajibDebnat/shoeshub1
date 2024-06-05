import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return <div className="flex flex-col justify-center items-center">
    <img src={imgURL} alt="customer" width={120} height={120} className=" object-contain rounded-full"/>
    <p className=" text-center leading-7 my-4 text-slate-gray font-montserrat max-w-96">{feedback}</p>
    <div className=" flex justify-center items-center gap-2 mb-2">
        <img src={star} alt="customer rating" height={24} width={24} className=" object-contain m-0"/>
        <p className=" font-montserrat text-xl text-slate-gray">({rating})</p>
    </div>
    <h3 className=" mt-1 font-palanquin text-3xl font-bold text-center text-slate-700" >{customerName}</h3>
  </div>;
}

export default ReviewCard;
