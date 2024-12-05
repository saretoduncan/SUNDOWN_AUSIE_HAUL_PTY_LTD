import AnimateToTop from "../../AnimationWrappers/AnimateToTop";
import truck_one from "../../assets/Truck_one.webp";
import PrimaryLinkButton from "../../components/Buttons/PrimaryLinkButton";
import SecondaryLinkButton from "../../components/Buttons/SecondaryLinkButton";
import { ENavDataTitles } from "../../types/types";
const HeroSection = () => {
  return (
    <>
      <div
        className="h-[400px] lg:h-[500px] xl: w-full relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(" + "'" + truck_one + "'" + ")" }}
      >
        <div className="absolute top-0 bottom-0 w-full bg-black bg-opacity-60 text-gray-100 flex flex-col justify-center px-4 font-bold">
          <div className="xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
            <AnimateToTop>
            <div className="space-y-2 mt-24 md:max-w-md lg:max-w-lg">
              <section className="space-y-1">
                <h1 className="text-shadow shadow-gray-950 text-2xl lg:text-3xl ">
                  <span className="text-orange-500">Sundown Aussie Haul</span>{" "}
                  Reliable Haulage Services Across Western Australia
                </h1>
                <p className="text-sm text-white font-normal text-shadow-lg shadow-gray-950 ">
                  Offering reliable and efficient transportation solutions
                  across Western Australia, ensuring safe and timely delivery
                  for all haulage needs.
                </p>
              </section>
              <section className="flex space-x-2">
                
                <PrimaryLinkButton
                  linkName="Learn More"
                  url={ENavDataTitles.ABOUT_PAGE}
                />
                <SecondaryLinkButton
                  linkName="Contact us"
                  url={ENavDataTitles.CONTACTS_PAGE}
                />
              </section>
            </div>
            </AnimateToTop>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
