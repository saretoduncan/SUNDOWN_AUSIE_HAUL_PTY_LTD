import ServiceImgCard from "../../components/ServiceImgCard";
import truck_one from "../../assets/Truck_one.webp";
import ServiceCardContent from "../../components/ServiceCardContent";
import truck_two from "../../assets/trucks_two.webp";
import truck_rear from "../../assets/rear_trucks_one.webp";
import AnimateToTop from "../../AnimationWrappers/AnimateToTop";
import AnimateToRight from "../../AnimationWrappers/AnimateToRight";
import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
import truck_head from "../../assets/head_only_truck.webp";
const WhatWeDo = () => {
  return (
    <>
      <div className="px-4">
        <div className="grid gap-6 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
          <section className="overflow-hidden">
            <AnimateToTop>
              <div>
                <h5 className="text-orange-500 font-bold text-xl text-center uppercase ">
                  What we do best
                </h5>
                <p className="text-center">
                  Explore our professional services at{" "}
                  <span className="font-bold text-orange-500">
                    Sundown Ausie Haul
                  </span>
                </p>
              </div>
            </AnimateToTop>
          </section>
          <section className="grid gap-12">
            <div className="grid gap-6 md:grid-cols-2 ">
              <section className="overflow-x-hidden self-center">
                <AnimateToRight>
                  <div>
                    <ServiceCardContent
                      title="Short Haulage"
                      content="We provide reliable short-haul haulage services across Western Australia, ensuring fast, safe, and timely deliveries. Our experienced team handles cargo with precision, offering secure transportation for shorter routes. Leveraging modern equipment and logistics expertise, we tailor our services to meet your specific needs. Whether you require quick local deliveries or regional shipments, Sundown Haul guarantees efficient, dependable, and prompt short-haul solutions. Trust us to deliver your freight with care and reliability every time."
                    />
                  </div>
                </AnimateToRight>
              </section>
              <section className="">
                <div className="">
                  <div>
                    <ServiceImgCard
                      cardImg={truck_one}
                      animate={AnimateToLeft}
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className="grid gap-6 md:grid-cols-2  ">
              <section className="self-center md:order-2 ">
                <div className="overflow-x-hidden  ">
                  <AnimateToLeft>
                    <div>
                      <ServiceCardContent
                        title="Long Haulage"
                        content="We offer reliable long-haul haulage across diverse routes, delivering exceptional service with a focus on safety and timeliness. Our experienced team ensures your cargo is transported securely and on schedule, regardless of the distance. We handle extensive routes with precision, leveraging modern equipment and logistics expertise to meet your unique haulage needs. Whether you're moving goods across regions or covering long distances, you can count on Sundown Haul for efficient, dependable, and timely long-haul solutions. Trust us to deliver your freight with care and reliability every time."
                      />
                    </div>
                  </AnimateToLeft>
                </div>
              </section>
              <section className="">
                <ServiceImgCard cardImg={truck_two} animate={AnimateToRight} />
              </section>
            </div>
            <div className="grid gap-6 md:grid-cols-2 ">
              <section className="self-center">
                <div className="overflow-x-hidden">
                  <AnimateToRight>
                    <div>
                      <ServiceCardContent
                        title="Blue Rock Haulage"
                        content="We specialize in blue rock haulage across Western Australia, delivering safe, efficient, and on-time transportation. Our skilled team expertly manages the movement of heavy and bulk materials, providing secure and customized haulage solutions. Equipped with modern machinery and industry know-how, we adapt our services to meet the specific needs of blue rock transport. Whether it’s local site deliveries or regional transfers, Sundown Haul ensures dependable, timely, and hassle-free logistics. Rely on us for the careful and efficient handling of your blue rock cargo every step of the way."
                      />
                    </div>
                  </AnimateToRight>
                </div>
              </section>
              <section>
                <ServiceImgCard cardImg={truck_rear} animate={AnimateToLeft} />
              </section>
            </div>
            <div className="grid gap-6 md:grid-cols-2 ">
              <section className="self-center md:order-2">
                <div className="overflow-x-hidden">
                  <AnimateToLeft>
                    {" "}
                    <div>
                      <ServiceCardContent
                        title="Blue Rock Haulage"
                        content="We deliver reliable iron ore haulage services across Western Australia, ensuring secure, efficient, and timely transport. Our dedicated team handles bulk materials with precision, providing tailored solutions to meet the unique needs of iron ore logistics. Utilizing advanced equipment and industry know-how, we guarantee safe handling from mine sites to processing facilities. With a focus on punctuality and operational efficiency, Sundown Haul is your trusted partner for the smooth and dependable transportation of iron ore cargo every time."
                      />
                    </div>
                  </AnimateToLeft>
                </div>
              </section>
              <section>
                <ServiceImgCard cardImg={truck_head} animate={AnimateToRight} />
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
