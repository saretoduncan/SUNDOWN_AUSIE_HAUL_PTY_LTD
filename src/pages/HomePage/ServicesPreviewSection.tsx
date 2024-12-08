import truck_two from "../../assets/trucks_two.webp";
import one_trailer_truck from "../../assets/one_trailer_truck.webp";
import truck_rear from "../../assets/rear_trucks_one.webp";
import ServicePreviewCardComponent from "../../components/ServicePreviewCardComponent";
import AnimateToTop from "../../AnimationWrappers/AnimateToTop";
import AnimateToRight from "../../AnimationWrappers/AnimateToRight";
import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
const ServicesPreviewSection = () => {
  return (
    <>
      <div className="p-4 bg-orange-50  ">
        <div className="grid gap-6 xl:w-[1040px] 2xl:w-[1280px] xl:mx-auto">
          <section className="overflow-hidden">
            <AnimateToTop>
              <div className="grid gap-2">
                <h4 className="text-xl font-bold text-center lg:text-4xl text-orange-500">
                  Providing Dependable <br /> Transport and Logistics <br />
                  Services
                </h4>
                <p className="text-sm text-center md:text-base">
                  <span className="font-bold text-orange-500">
                    Sundown Aussie Haul{" "}
                  </span>
                  Trucking delivers reliable transport and logistic solutions
                  across Western Australia. With a skilled team and modern
                  fleet, we ensure safe.
                </p>
              </div>
            </AnimateToTop>
          </section>
          <section className="grid gap-2 md:grid-cols-2">
            <section className="overflow-hidden">
              <AnimateToRight>
                <ServicePreviewCardComponent
                  backgroundImage={truck_two}
                  cardTitle="Long Haulage"
                  cardCaption="Delivering Freight Safely and On Time, No Matter the Distance."
                />
              </AnimateToRight>
            </section>

            <section className="overflow-x-hidden">
              <AnimateToLeft>
                <ServicePreviewCardComponent
                  backgroundImage={one_trailer_truck}
                  cardTitle="Short Haulage"
                  cardCaption="Swift and Reliable Deliveries for Your Local Needs."
                />
              </AnimateToLeft>
            </section>
            <section className="overflow-x-hidden">
              <AnimateToRight>
                <ServicePreviewCardComponent
                  backgroundImage={truck_rear}
                  cardTitle="Iron ore Haulage"
                  cardCaption="Driving Heavy Loads with Strength and Precision."
                />
              </AnimateToRight>
            </section>
            <section className="overflow-x-hidden">
              <AnimateToLeft>
                <ServicePreviewCardComponent
                  backgroundImage={truck_two}
                  cardTitle="Blue rock Haulage"
                  cardCaption="Moving Blue Rock with Dependability and Care."
                />
              </AnimateToLeft>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPreviewSection;
