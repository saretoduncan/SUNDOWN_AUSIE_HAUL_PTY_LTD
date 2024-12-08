import AnimateToTop from "../../AnimationWrappers/AnimateToTop";
import truck_two from "../../assets/trucks_two.webp";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[400px] lg:h-[500px] xl: w-full relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(" + "'" + truck_two + "'" + ")" }}
      >
        <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-[#111111] to-[#f9731660]  text-gray-100 flex flex-col justify-center px-4 font-bold">
          <div className="xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
            <AnimateToTop>
              <div className="space-y-2 mt-24 md:max-w-md lg:max-w-lg">
                <section className="space-y-1">
                  <h1 className="text-shadow   shadow-gray-950 text-2xl lg:text-3xl ">
                    YOUR COMPREHENSIVE HAULAGE PARTNER
                  </h1>
                  <p className="text-sm text-white font-normal text-shadow-lg shadow-gray-950  lg:text-base">
                    Dedicated to building a more reliable transport sector,
                    Sundown Ausie Haul strives for exceptional service,
                    transparency, and customer satisfaction in every haulage
                    operation.
                  </p>
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
