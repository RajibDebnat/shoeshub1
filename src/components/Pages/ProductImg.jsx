

function ProductImg({src,alt,discount,price,subprice}) {
  return (
    <div className=" relative flex justify-center  flex-col">
        <img
          src={src}
          alt={alt}
          height={100}
          className=" hover:scale-[1.05] transition-all duration-[0.3s] rounded-md object-contain border-b-2 border-dim border-opacity-50"
        />
           <div className="absolute top-4">
          <p className="rotate-[-10deg] shadow-xl inline-block px-3 bg-primary text-tant-coral-red font-semibold rounded-xl">
            sale{" "}
            <span className="font-semibold font-montserrat text-coral-red">
             {Math.trunc(((subprice-price)/subprice)*100)}%
            </span>
          </p>
        </div>
    </div>
  )
}

export default ProductImg