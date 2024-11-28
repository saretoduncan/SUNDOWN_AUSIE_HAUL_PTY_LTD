import { useCallback, useState } from "react";

type TReturnHook = {
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};
const useHoverHook = (intialValue: boolean): TReturnHook => {
  const [isHovered, setHovered] = useState(intialValue);
  const handleMouseEnter = useCallback(() => {
    setHovered(() => true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(() => false);
  }, []);
  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};
export default useHoverHook;
