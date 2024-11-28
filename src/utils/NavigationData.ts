import { ENavDataTitles, TNavData } from "../types/types";

export const navigationData: Map<string, TNavData> = new Map();

navigationData.set(ENavDataTitles.HOME_PAGE, { linkName: "Home", to: "/" });
navigationData.set(ENavDataTitles.ABOUT_PAGE, {
  linkName: "About us",
  to: "/aboutus",
});
navigationData.set(ENavDataTitles.SERVICES_PAGE, {
  linkName: "Services",
  to: "/services",
});
navigationData.set(ENavDataTitles.CONTACTS_PAGE, {
  linkName: "Contact us",
  to: "/contactus",
});

export const PHONENUMBER = "+61 468 869 168";
