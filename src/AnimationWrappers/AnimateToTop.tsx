import { useInView } from "react-intersection-observer";
import { TWrapperType } from "../types/types";

const AnimateToTop: React.FC<TWrapperType> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        } transition-all duration-1000`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateToTop;
