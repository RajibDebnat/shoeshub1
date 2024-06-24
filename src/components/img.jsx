import { useInView } from "react-intersection-observer";
import { easeInOut, motion } from "framer-motion";

function LoadingImage({ src, alt, className, width = 640, height = 480 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
 


  return (
    <motion.div key={src} initial={{translateY:-100, opacity:0}} animate={{translateY:0, opacity:1}} exit={{translateY:-260,opacity:0}} transition={{duration:0.5 , easings:easeInOut}} className=" transform rotate-[-36deg]">
<motion.div  style={{ transform: 'rotate(-35deg)' }} >

    <motion.img
      className={`heroImg ${className}`}
      ref={ref}
      src={src}
      alt={alt}
       Static rotation
      animate={{
        y: [0, -20, 0], // Keyframes for translateY
      }}
      transition={{
        duration:5, // Duration of one cycle (up and down)
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut", // Easing function
      }}
      />
      </motion.div>
      </motion.div>
  );
}

export default LoadingImage;
