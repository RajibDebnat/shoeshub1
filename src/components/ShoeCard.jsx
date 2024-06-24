const ShoeCard = ({ imgURL, onClick, changeBigShoeImg, bigShoeImg, label }) => {

  return (
    <div
      onClick={()=>onClick(imgURL.bigShoe)} className={` border-2 rounded-xl cursor-pointer flex-1 bg-white max-sm:flex-none sm:flex-1 mb-4`}
      // onClick={() => changeBigShoeImg(imgURL.bigShoe)}
    >
      <div className="  rounded-xl relative overflow-hidden flex justify-center items-center bg-white bg-center w-full h-auto p-4">
        <img
          alt="shoe examples"
          loading="lazy"
          className="object-contain rounded-xl w-full h-full max-sm:bottom-[20px] max-md:w-[50px] max-w-[120px] max-h-[120px] max-smsm:max-w-[70px] max-sm:max-h-[70px]"
          src={imgURL.thumbnail}
        />
        <span className="max-md:hidden text-slate-400 font-semibold absolute top-0 px-2">
          {label}
        </span>
      </div>
    </div>
  );
};

export default ShoeCard;
