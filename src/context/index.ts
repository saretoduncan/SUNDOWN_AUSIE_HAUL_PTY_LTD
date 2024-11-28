import { Dispatch, SetStateAction, createContext}from  "react";

type TNavContextType ={
    isSideNavopen:boolean;
    setSideNavOpen: Dispatch<SetStateAction<boolean>>
}
export const NavBarContext= createContext<TNavContextType| undefined>(undefined);