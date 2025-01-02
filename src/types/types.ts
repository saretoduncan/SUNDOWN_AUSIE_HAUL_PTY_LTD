export type TNavLinkTypes = {
  linkName: string;
  url: string;
  customClass?: string;
};
export const ENavDataTitles = {
  HOME_PAGE: "homePage",
  SERVICES_PAGE: "servicePage",
  ABOUT_PAGE: "aboutPage",
  CONTACTS_PAGE: "contactPage",
};

export type TWrapperType = {
  children: React.ReactNode;
};


export type TContactFormData = {
  full_name:string;
  email:string;
  address:string;
  phone_number:string;
  message:string
};
