import { useInView } from "react-intersection-observer";


function LoadingImage({ src, alt, className, width = 640, height = 480, placeholder }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <img
      width={width}
      height={height}
      className={className}
      ref={ref}
      src={inView ? src : placeholder}
      alt={alt}
    />
  );
}

export default LoadingImage;
