import PrimaryLinkButton from "../../components/Buttons/PrimaryLinkButton";
import { ENavDataTitles } from "../../types/types";
import { FaClock } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FaRedRiver } from "react-icons/fa";
import { FaCubes } from "react-icons/fa6";
import AnimateToTop from "../../AnimationWrappers/AnimateToTop";
import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
import AnimateToRight from "../../AnimationWrappers/AnimateToRight";

function WhyChooseUs() {
  return (
    <>
      <div className="p-4 grid gap-4 md:grid-cols-3  xl:w-[1024px] xl:mx-auto 2xl:w-[1280px]">
        <section className="">
          <AnimateToTop>
            <div className="grid gap-2 ">
              <h3 className="font-bold text-2xl">
                Discover Our seamless Logistics solutions
              </h3>
              <p className="text-sm">
                Experience seamless logistics with our state-of-the-art fleet
                and skilled drivers. We prioritize timely deliveries and provide
                real-time tracking for your peace of mind.
              </p>
              <div className="my-2">
                <PrimaryLinkButton
                  linkName="Learn More"
                  url={ENavDataTitles.ABOUT_PAGE}
                />
              </div>
            </div>
          </AnimateToTop>{" "}
        </section>
        <section className=" grid gap-2 ">
          <section className="overflow-x-hidden">
            <AnimateToLeft>
              <div className="">
                <h3 className="text-xl font-bold">
                  <FaClock className="text-orange-500 text-2xl  " />
                  <span>Real-Time Tracking for your shipping.</span>
                </h3>
                <p className="text-sm">
                  Stay updated with our advanced tracking system.
                </p>
              </div>{" "}
            </AnimateToLeft>
          </section>
          <section className="overflow-x-hidden">
            <AnimateToLeft>
              <div className="">
                <h3 className="text-xl font-bold">
                  <FaRedRiver className="text-orange-500 text-2xl  " />
                  <span>Experienced Drivers Committed to Excellence</span>
                </h3>
                <p className="text-sm">
                  Our drivers are tranined to ensure safe deliveries.
                </p>
              </div>
            </AnimateToLeft>
          </section>
        </section>
        <section className=" grid gap-2 ">
          <section className="overflow-x-hidden">
            <AnimateToRight>
              <div className="overflow-hidden">
                {" "}
                <h3 className="text-xl font-bold">
                  <FaUserCheck className="text-orange-500 text-2xl  " />
                  <span>24/7 Customer Support For Your Needs.</span>
                </h3>
                <p className="text-sm">
                  Our dedicated team is here to assist you anytime
                </p>
              </div>
            </AnimateToRight>
          </section>
          <section className="overflow-x-hidden">
            <AnimateToRight>
              <div>
                <h3 className="text-xl font-bold">
                  <FaCubes className="text-orange-500 text-2xl  " />
                  <span>Flexible Solution Tailored to Your Needs</span>
                </h3>
                <p className="text-sm">
                  We adapt our services to meet your logistics requirements.
                </p>
              </div>
            </AnimateToRight>
          </section>
        </section>
      </div>
    </>
  );
}

export default WhyChooseUs;
