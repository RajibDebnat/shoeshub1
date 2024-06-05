
import handleShopNow from '../store/handleShopNow'
import { whatsAppLogo } from '../../assets/icons'
import Button from '../Button'
function ViewDetailsSub({imgURL}) {
  return (
    <div className=" flex  justify-center max-sm:gap-8 gap-[60px] max-xl:gap-[30px] max-lg:flex-wrap items-center ">
    <div className=' max-w-100% xl:max-w-[60%]'>
    <p className='   max-sm:text-[16px] text-tant-coral-red text-xl font-bold font-montserrat  uppercase'>
    View Details
    </p>

    <h1 className=' max-sm:text-[60px] max-w-[100%] xxl:max-w-[80%] my-4 font-palanquin text-[78px] leading-[1.1] font-bold  text-slate-900  tracking-tight '>Know More About <br/> <span className='  text-coral-red  '>Shoes Hub</span> </h1>
    <p className=' max-sm:max-w-[100%]  max-sm:text-[16px] max-sm:mb-4    mb-8 max-xl:max-w-[90%] max-w-[50%] leading-7 text-slate-gray font-montserrat text-lg'>Begin your stylish journey with our curated footwear collection where every step speaks volumes. Explore, elevate, and shine</p>
    <Button
  onClick={handleShopNow}
  label="Shope Now"
  imgURL={whatsAppLogo}
  className={""}
/>
  </div>
  <div className=' items-center '>
    <img width={490} src={imgURL} alt='Jordan 1'  className=' object-contain rounded-xl'/>
  </div>
    </div>
  )
}

export default ViewDetailsSub