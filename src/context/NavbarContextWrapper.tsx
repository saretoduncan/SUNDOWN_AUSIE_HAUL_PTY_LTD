import { ReactNode, useState } from "react";
import { NavBarContext } from ".";

type TNavWrapper = {
    children: ReactNode;
  };
const NavbarContextWrapper:React.FC<TNavWrapper> = ({children}) => {
    const [isSideNavOpen, setSideNavOpen]= useState(false);
  return <NavBarContext.Provider value={{isSideNavopen:isSideNavOpen, setSideNavOpen}}>{children}</NavBarContext.Provider>;
};

export default NavbarContextWrapper;
