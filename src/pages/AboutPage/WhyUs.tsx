import WhyUsCardComponent from "../../components/WhyUsCardComponent";
import intergrity_img from "../../assets/handshake.svg";
import customer_service_img from "../../assets/customer_service.svg";
import inovation_img from "../../assets/inovation.svg";
import safety_img from "../../assets/safe_shield.svg";
import AnimateToRight from "../../AnimationWrappers/AnimateToRight";
import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
const WhyUs = () => {
  return (
    <>
      <div className="p-4 bg-orange-50">
        <div className="grid gap-6  xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
          <div>
            <section className="grid gap-6 md:grid-cols-2">
              <section className="overflow-x-hidden">
                <AnimateToRight>
                  <div>
                    <div>
                      <div className="flex space-x-2 xl:w-1/4 ">
                        <h5 className="text-orange-500 font-bold text-xl  ">
                          Our Mission
                        </h5>{" "}
                        <hr className="flex-grow border-orange-500 self-center" />
                      </div>
                    </div>
                    <div>
                      <p>
                        At{" "}
                        <span className="font-bold text-orange-500 ">
                          Sundown Aussie Haul
                        </span>
                        , our mission is to provide reliable, efficient, and
                        safe freight transportation solutions across Australia.
                        We are committed to delivering exceptional service,
                        fostering long-term partnerships with our clients, and
                        ensuring the highest standards of professionalism and
                        sustainability in every haul.
                      </p>
                    </div>{" "}
                  </div>
                </AnimateToRight>
              </section>
              <section className="overflow-x-hidden">
                <AnimateToLeft>
                  <div>
                    <div>
                      <div className="flex space-x-2 xl:w-1/4">
                        <h5 className="text-orange-500 font-bold text-xl ">
                          Our Vision
                        </h5>{" "}
                        <hr className="flex-grow border-orange-500 self-center" />
                      </div>
                      <div>
                        <p>
                          Our vision is to become Australia’s leading trucking
                          company, recognized for innovation, operational
                          excellence, and environmental responsibility. We aim
                          to drive progress in the logistics industry while
                          supporting the growth of Australian businesses and
                          connecting communities through dependable transport
                          services
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateToLeft>
              </section>
            </section>
          </div>

          <div className="">
            <section className="overflow-x-hidden">
              <div className="flex space-x-2 md:w-1/4">
                <h5 className="text-orange-500 font-bold text-xl capitalize ">
                  Our core values
                </h5>{" "}
                <hr className="flex-grow border-orange-500 self-center" />
              </div>
            </section>
            <section>
              <section className="grid gap-4 md:grid-cols-2 ">
                <div>
                  <AnimateToRight>
                    <div>
                      <WhyUsCardComponent
                        img={intergrity_img}
                        title="Intergrity"
                        content="We uphold the highest ethical standards in all our operations, ensuring transparency, honesty, and fairness in our dealings."
                      />
                    </div>
                  </AnimateToRight>
                </div>
                <div className="overflow-x-hidden">
                  <AnimateToLeft>
                    <div>
                      <WhyUsCardComponent
                        img={customer_service_img}
                        title="Customer Focus"
                        content="Our clients are at the heart of everything we do. We are committed to providing exceptional service, exceeding their expectations, and building long-lasting relationships."
                      />
                    </div>
                  </AnimateToLeft>
                </div>
                <div className="outflow-x-hidden">
                  <AnimateToRight>
                    <div>
                      <WhyUsCardComponent
                        img={inovation_img}
                        title="Innovation"
                        content="We embrace innovation and continuously seek to improve our services, processes, and technology to stay ahead of industry trends and deliver the best possible value to our clients."
                      />
                    </div>
                  </AnimateToRight>
                </div>
                <div className="overflow-x-hidden">
                  <AnimateToLeft>
                    <div>
                      <WhyUsCardComponent
                        img={safety_img}
                        title="Safety"
                        content="The safety of our employees, customers, and the public is our top priority. We adhere to strict safety standards and invest in training and equipment to prevent accidents and ensure a safe working environment."
                      />
                    </div>
                  </AnimateToLeft>
                </div>
              </section>
            </section>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
