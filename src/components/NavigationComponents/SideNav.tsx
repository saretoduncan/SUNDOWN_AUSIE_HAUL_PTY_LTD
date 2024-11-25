import { ENavDataTitles } from "../../types/types";
import { navigationData } from "../../utils/NavigationData";
import NavlinkComponent from "./NavlinkComponent";

const SideNav = () => {
  return (
    <>
      <div className="grid ">
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
        />{" "}
      </div>
    </>
  );
};

export default SideNav;
