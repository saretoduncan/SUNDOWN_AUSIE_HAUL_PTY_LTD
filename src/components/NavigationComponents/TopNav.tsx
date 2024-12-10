import { FaBars } from "react-icons/fa6";

import logo from "../../assets/logo_sundown.svg";
import { useContext } from "react";
import { NavBarContext } from "../../context";
import NavlinkComponent from "./NavlinkComponent";
import { ENavDataTitles } from "../../types/types";
import { navigationData } from "../../utils/NavigationData";
import CallLinkComponent from "./CallLinkComponent";
import useChangeOfYAxisHook from "../../customHooks/useChangeOfYAxisHook";
import { useLocation } from "react-router";

const TopNav: React.FC = () => {
  const { isYAxisChange } = useChangeOfYAxisHook();
  const openNav = useContext(NavBarContext);
  const currentPath = useLocation().pathname;
  return (
    <>
      <nav className="flex w-full justify-between  px-4 py-1 items-center">
        <section>
          <img
            src={logo}
            alt="sundown haul logo"
            className={`${
              isYAxisChange
                ? "w-[100px] lg:w-[120px]"
                : "w-[120px] lg:w-[150px]"
            } transition-all ease-in-out duration-700`}
          />
        </section>{" "}
        <section className="hidden lg:flex">
          <NavlinkComponent
            linkName={navigationData.get(ENavDataTitles.HOME_PAGE)!!.linkName}
            linkUrl={navigationData.get(ENavDataTitles.HOME_PAGE)!!.url}
            classes={
              ( isYAxisChange || currentPath===navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url) ||
              currentPath === navigationData.get(ENavDataTitles.HOME_PAGE)!!.url
                ? ""
                : "lg:text-gray-100 lg:text-shadow lg:shadow-black"
            }
          />
          <NavlinkComponent
            linkName={navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.linkName}
            linkUrl={navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.url}
            classes={
              ( isYAxisChange || currentPath===navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url) ||
              currentPath ===
                navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.url
                ? ""
                : "lg:text-gray-100 lg:text-shadow lg:shadow-black"
            }
          />{" "}
          <NavlinkComponent
            linkName={
              navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.linkName
            }
            linkUrl={navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.url}
            classes={
              ( isYAxisChange || currentPath===navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url) ||
              currentPath ===
                navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.url
                ? ""
                : "lg:text-gray-100 lg:text-shadow lg:shadow-black"
            }
          />
          <NavlinkComponent
            linkName={
              navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.linkName
            }
            linkUrl={navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url}
            classes={
             ( isYAxisChange || currentPath===navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url) ||
              currentPath ===
                navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url
                ? ""
                : "lg:text-gray-100 lg:text-shadow lg:shadow-black"
            }
          />
        </section>
        <section className="hidden lg:block">
          <CallLinkComponent />
        </section>
        <section className="self-center lg:hidden">
          <FaBars
            className={`text-3xl transition-all duration-700 ease-in-out ${
              openNav?.isSideNavopen ||
              isYAxisChange ||
              currentPath ===
                navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url
                ? "text-gray-950"
                : "text-slate-100"
            } `}
            onClick={() => openNav?.setSideNavOpen(!openNav?.isSideNavopen)}
          />
        </section>
      </nav>
    </>
  );
};

export default TopNav;
