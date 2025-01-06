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
  customer_name: string;
  customer_email: string;
  customer_address: string;
  customer_phone_number: string;
  message_subject: string;
  message_content: string;
};
