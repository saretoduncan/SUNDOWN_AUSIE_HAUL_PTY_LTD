import { Link } from "react-router";
import { ENavDataTitles } from "../../types/types";
import logo from "../../assets/logo_sundown.svg";
import NavlinkComponent from "../NavigationComponents/NavlinkComponent";
import { navigationData } from "../../utils/NavigationData";
import GetInTouchFooterComponents from "./GetInTouchFooterComponents";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { PHONENUMBER } from "../../utils/Constants";
const Footer = () => {
  return (
    <>
      <div className="bg-orange-50 h-full px-4 py-8">
        <div className="grid gap-2 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
          <div className="grid gap-2 md:grid-cols-3">
            <section className="flex flex-col md:flex-col-reverse space-y-2 ">
              <Link to={navigationData.get(ENavDataTitles.HOME_PAGE)!!.url}>
                <img
                  src={logo}
                  alt="logo"
                  className="w-[150px] mx-auto md:mx-0"
                />
              </Link>

              <p className="text-sm font-bold lg:text-base">
                <span className="text-orange-500  ">Sundown Haul Aussie</span>{" "}
                provides reliable long, short, blue rock, and iron ore haulage
                services, ensuring safe, timely deliveries with a skilled team
                and well-maintained fleet.
              </p>
            </section>
            <section className="space-y-1 md:justify-self-center">
              <h6 className="text-orange-500 font-bold capitalize">
                Quick links
              </h6>
              <div className="grid gap-1">
                <NavlinkComponent
                  classes="px-0 text-sm md:text-base"
                  linkName={
                    navigationData.get(ENavDataTitles.HOME_PAGE)!!.linkName
                  }
                  linkUrl={navigationData.get(ENavDataTitles.HOME_PAGE)!!.url}
                />
                <NavlinkComponent
                  classes="px-0 text-sm md:text-base"
                  linkName={
                    navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.linkName
                  }
                  linkUrl={navigationData.get(ENavDataTitles.ABOUT_PAGE)!!.url}
                />
                <NavlinkComponent
                  classes="px-0 text-sm md:text-base"
                  linkName={
                    navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.linkName
                  }
                  linkUrl={
                    navigationData.get(ENavDataTitles.CONTACTS_PAGE)!!.url
                  }
                />{" "}
                <NavlinkComponent
                  classes="px-0 text-sm md:text-base"
                  linkName={
                    navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.linkName
                  }
                  linkUrl={
                    navigationData.get(ENavDataTitles.SERVICES_PAGE)!!.url
                  }
                />
              </div>
            </section>
            <section className="space-y-2 ">
              <h6 className="text-orange-500 font-bold capitalize">
                Get in touch
              </h6>
              <div className="grid gap-2">
                <GetInTouchFooterComponents
                  customIcon={FaLocationDot}
                  textContent="47D Station Street Cannington WA, Perth, Australia, 6107"
                />
                <GetInTouchFooterComponents
                  customIcon={MdOutlineAlternateEmail}
                  textContent="info@sundownhaul.com.au"
                />
                <GetInTouchFooterComponents
                  customIcon={FaPhoneVolume}
                  textContent={PHONENUMBER}
                />
              </div>
            </section>
          </div>
          <div>
            <hr className="border-orange-500 border-4" />
            <small className="font-bold">
              &copy; 2024 SUNDOWN AUSIE HAUL PTY LTD.{" "}
              <span className="text-orange-500">All rights reserved</span>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
