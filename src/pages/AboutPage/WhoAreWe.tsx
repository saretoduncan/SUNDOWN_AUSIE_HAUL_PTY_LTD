import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
import AnimateToRight from "../../AnimationWrappers/AnimateToRight";
import truck_head from "../../assets/head_only_truck.webp";
import trapezium from "../../assets/trapezium.svg";
const WhoAreWe = () => {
  return (
    <>
      <div className="px-4 ">
        <div className="grid md:grid-cols-2  gap-4 xl:w-[1040px] 2xl:w-[1280px] xl:mx-auto">
          <section className="order-2 md:order-1 ">
            <div className="relative lg:pe-10 ">
              <div className="absolute left-0 top-10  lg:top-6 lg:left-2 xl:left-0">
                <img
                  src={trapezium}
                  className="w-[300px] rounded lg:w-[300px] xl:w-[420px] "
                  alt="trapezium svg"
                />
              </div>
              <div className="overflow-hidden">
                <AnimateToRight>
                  <div
                    className="relative bg-cover bg-no-repeat bg-center size-[300px] lg:w-full xl:h-[400px] left-6 top-4 rounded"
                    style={{
                      backgroundImage: "url(" + "'" + truck_head + "'" + ")",
                    }}
                  ></div>
                </AnimateToRight>
              </div>
            </div>{" "}
          </section>
          <section className="md:self-center overflow-hidden order-1 md:order-2 ">
            <AnimateToLeft>
              <div className="mt-16 space-y-2  ">
                <div>
                  <div className="flex space-x-2">
                    <h3 className="capitalize font-bold text-orange-500 text-xl ">
                      who are we
                    </h3>{" "}
                    <hr className="flex-grow self-center border-orange-500" />
                  </div>
                </div>

                <div>
                  <p>
                    Sundown Ausie Haul is a trusted provider of premium haulage
                    services, backed by years of industry experience. Our
                    versatile fleet is equipped to handle a wide range of cargo,
                    ensuring safe, timely deliveries. We specialize in long
                    haulage, short haulage, blue rock haulage, and iron ore
                    haulage, offering tailored logistics solutions to meet your
                    unique needs. With a focus on efficiency, safety, and
                    customer satisfaction, Sundown Haul is your reliable partner
                    for seamless transportation services.
                  </p>
                </div>
              </div>
            </AnimateToLeft>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
