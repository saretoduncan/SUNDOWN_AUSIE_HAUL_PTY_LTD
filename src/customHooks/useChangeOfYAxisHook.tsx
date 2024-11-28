import { useEffect, useState } from "react";

const useChangeOfYAxisHook = () => {
  const [isYAxisChange, setYAxisChange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setYAxisChange(() => true) : setYAxisChange(false);
    });
  }, []);
  return { isYAxisChange };
};

export default useChangeOfYAxisHook;
