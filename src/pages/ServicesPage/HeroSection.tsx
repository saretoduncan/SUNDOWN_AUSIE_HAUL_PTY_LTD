import truck_rear from "../../assets/rear_trucks_one.webp";
import AnimateToTop from "../../AnimationWrappers/AnimateToTop";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[400px] lg:h-[500px] xl: w-full relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(" + "'" + truck_rear + "'" + ")" }}
      >
        <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-[#111111] to-[#f9731660]  text-gray-100 flex flex-col justify-center px-4 font-bold">
          <div className="xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
            <AnimateToTop>
              <div className="space-y-2 mt-24 md:max-w-md lg:max-w-lg">
                <section className="space-y-1">
                  <h1 className="text-shadow   shadow-gray-950 text-2xl lg:text-3xl uppercase ">
                    Efficient and Secure Transport Solutions
                  </h1>
                  <p className="text-sm text-white font-normal text-shadow-lg shadow-gray-950  lg:text-base">
                    Dedicated to fostering a more reliable haulage sector,
                    Sundown Haul strives for exceptional service and
                    transparency.
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
