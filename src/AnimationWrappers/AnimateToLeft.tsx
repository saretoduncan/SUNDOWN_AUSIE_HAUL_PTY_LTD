import React from "react";
import { useInView } from "react-intersection-observer";
import { TWrapperType } from "../types/types";

const AnimateToLeft: React.FC<TWrapperType> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        } transition-all duration-1000`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateToLeft;
