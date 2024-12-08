import { useContext } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { NavBarContext } from "../../context";

const NavigationBar = () => {
  const openNav = useContext(NavBarContext);
  return (
    <>
      <div className="relative">
        <section className="relative z-20 pt-2">
          <TopNav />
        </section>
        <section
          className={`absolute top-0 bg-orange-50 w-full pt-32 px-4 py-4 shadow-md overflow-x-hidden rounded-b-md transition-all duration-700 ease-in-out ${
            openNav?.isSideNavopen ? "translate-x-0" : "translate-x-[-100%]"
          } lg:hidden`}
        >
          <SideNav />
        </section>
      </div>
    </>
  );
};

export default NavigationBar;
