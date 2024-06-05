const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg ,label}) => {

  return (
    <div
      className={`border-2 rounded-xl ${
        imgURL.bigShoe === bigShoeImg && "border-coral-red"
      } cursor-pointer max-sm:flex-1`}
      onClick={() => {
        console.log("hello");
        return changeBigShoeImg(bigShoeImg);
      }}
    >
      <div className=" relative overflow-hidden flex justify-center items-center  bg-white  bg-center bg sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          alt="shoe exaples"
        loading="lazy"
          src={imgURL.thumbnail}
           height={100}
           width={100}
          className="  object-contain"
        />
        <span className="  max-sm:hidden text-slate-400 font-semibold absolute top-0 px-2 ]">{label}</span>
      </div>
    </div>
  );
};

export default ShoeCard;
