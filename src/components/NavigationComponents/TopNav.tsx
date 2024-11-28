import { FaBarsProgress } from "react-icons/fa6";
import logo from "../../assets/logo_sundown.svg";
import { useContext } from "react";
import { NavBarContext } from "../../context";
import NavlinkComponent from "./NavlinkComponent";
import { ENavDataTitles } from "../../types/types";
import { navigationData } from "../../utils/NavigationData";

const TopNav: React.FC = () => {
  const openNav = useContext(NavBarContext);
  return (
    <>
      <nav className="flex w-full justify-between  px-4 py-1 items-center">
        <section>
          <img src={logo} alt="sundown haul logo" className="w-[100px]" />
        </section>{" "}
        <section className="hidden lg:flex">
        <NavlinkComponent
          linkName={navigationData.get(ENavDataTitles.HOME_PAGE)!!.linkName}
          linkUrl={navigationData.get(ENavDataTitles.HOME_PAGE)!!.to}
          classes=""
        />
        <NavlinkComponent
          linkName={navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.linkName}
          linkUrl={navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.to}
          classes=""
        />{" "}
        <NavlinkComponent
          linkName={navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.linkName}
          linkUrl={navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.to}
          classes=""
        />
        <NavlinkComponent
          linkName={navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.linkName}
          linkUrl={navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.to}
          classes=""
        />
        </section>
        <section>
        

        </section>
        <section className="self-center lg:hidden">
          <FaBarsProgress
            className="text-3xl text-gray-800"
            onClick={() => openNav?.setSideNavOpen(!openNav?.isSideNavopen)}
          />
        </section>
      </nav>
    </>
  );
};

export default TopNav;
