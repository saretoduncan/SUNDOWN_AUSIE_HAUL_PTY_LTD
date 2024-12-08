import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
import FaqsCardComponents from "../../components/FaqsCardComponents";

const FaqsSection = () => {
  return (
    <>
      <div className="px-4 ">
        <div className="xl:w-[1024px] xl:mx-auto 2xl:w-[1280px] overflow-hidden">
            <AnimateToLeft>
          <div className="grid gap-4 md:grid-cols-2">
            <section className="">
              <h4 className="text-lg md:text-xl  font-bold text-orange-500 uppercase">
                Frequently asked questions
              </h4>
              <p className="text-sm">
                Explore our frequently asked questions to learn more about our
                haulage services.
              </p>
            </section>

            <section className="grid gap-4 md:gap-y-4 ">
              {" "}
              <hr className="border-orange-500" />{" "}
              <div className="grid ">
                {" "}
                <FaqsCardComponents
                  question="What services do you offer?"
                  answer="Sundown Haul specializes in long haulage, short haulage, and iron ore haulage. We also provide blue rock haulage services across Western Australia. Our team is dedicated to ensuring safe and efficient transport for all your needs."
                />
              </div>
              <hr className="border-orange-500" />
              <div className="grid ">
                <FaqsCardComponents
                  question="How do I book?"
                  answer="Booking our services is simple! You can reach out through our website or contact us directly. Our team will guide you through the process and confirm your booking promptly."
                />
              </div>
              <hr className="border-orange-500" />
              <div className="grid ">
                {" "}
                <FaqsCardComponents
                  question="What areas do you serve?"
                  answer="We proudly serve various regions in Western Australia. Our extensive network allows us to cover both urban and remote areas. No matter where you are located, we can assist with your haulage needs."
                />
              </div>
              <hr className="border-orange-500" />
              <div className="grid ">
                <FaqsCardComponents
                  question="Are your services insured?"
                  answer="Yes, all our haulage services are fully insured. We prioritize the safety and security of your cargo. Rest assured, your materials are in good hands with Sundown Haul."
                />
              </div>{" "}
              <hr className="border-orange-500" />
              <div className="grid ">
                {" "}
                <FaqsCardComponents
                  question="What is your pricing?"
                  answer="Our pricing is competitive and varies based on the type of haulage and distance. We provide transparent quotes with no hidden fees. Contact us for a personalized estimate tailored to your specific needs."
                />{" "}
              </div>{" "}
              <hr className="border-orange-500" />
            </section>
          </div></AnimateToLeft>
        </div>
      </div>
    </>
  );
};

export default FaqsSection;
