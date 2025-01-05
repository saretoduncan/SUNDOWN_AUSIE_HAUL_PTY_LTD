import { Dispatch, SetStateAction, createContext } from "react";

type TNavContextType = {
  isSideNavopen: boolean;
  setSideNavOpen: Dispatch<SetStateAction<boolean>>;
};
type TApiContextType = {
  data: string | null;
  loading: boolean;
  error: string | null;

  postData: (endpoint: string, payload: object) => Promise<void>;
};

export const NavBarContext = createContext<TNavContextType | undefined>(
  undefined
);
export const ApiContext = createContext<TApiContextType | undefined>(undefined);
