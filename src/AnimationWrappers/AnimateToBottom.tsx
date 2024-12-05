import { useInView } from "react-intersection-observer";
import { TWrapperType } from "../types/types";

const AnimateToBottom: React.FC<TWrapperType> = ({ children }) => {
  const { inView, ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? "translate-y-0 opacity-100" : "translate-y--28 opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateToBottom;
