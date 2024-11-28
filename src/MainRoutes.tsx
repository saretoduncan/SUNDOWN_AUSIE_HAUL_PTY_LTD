import { Route } from "react-router";
import { Routes } from "react-router";
import { navigationData } from "./utils/NavigationData";
import { ENavDataTitles } from "./types/types";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactusPage from "./pages/ContactusPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={navigationData.get(ENavDataTitles.HOME_PAGE)?.url}
          element={<HomePage />}
        />
        <Route
          path={navigationData.get(ENavDataTitles.ABOUT_PAGE)?.url}
          element={<AboutPage />}
        />
        <Route
          path={navigationData.get(ENavDataTitles.SERVICES_PAGE)?.url}
          element={<ServicesPage />}
        />
        <Route
          path={navigationData.get(ENavDataTitles.CONTACTS_PAGE)?.url}
          element={<ContactusPage />}
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
