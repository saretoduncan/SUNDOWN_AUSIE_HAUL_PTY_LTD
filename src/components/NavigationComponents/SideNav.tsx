import { ENavDataTitles } from "../../types/types";
import { navigationData } from "../../utils/NavigationData";
import CallLinkComponent from "./CallLinkComponent";
import NavlinkComponent from "./NavlinkComponent";

const SideNav:React.FC = () => {
  return (
    <>
      <div className="grid space-y-2 ">
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
        <CallLinkComponent/>
      </div>
    </>
  );
};

export default SideNav;
