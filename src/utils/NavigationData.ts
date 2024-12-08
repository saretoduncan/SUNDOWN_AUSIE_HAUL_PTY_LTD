import { ENavDataTitles, TNavLinkTypes } from "../types/types";

export const navigationData: Map<string, TNavLinkTypes> = new Map();

navigationData.set(ENavDataTitles.HOME_PAGE, { linkName: "Home", url: "/" });
navigationData.set(ENavDataTitles.ABOUT_PAGE, {
  linkName: "About us",
  url: "/aboutus",
});
navigationData.set(ENavDataTitles.SERVICES_PAGE, {
  linkName: "Services",
  url: "/services",
});
navigationData.set(ENavDataTitles.CONTACTS_PAGE, {
  linkName: "Contact us",
  url: "/contactus",
});



export const scrollUp = () =>
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
