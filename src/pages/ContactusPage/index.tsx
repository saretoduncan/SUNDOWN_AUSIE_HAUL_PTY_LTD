import AnimateToLeft from "../../AnimationWrappers/AnimateToLeft";
import AnimateToRight from "../../AnimationWrappers/AnimateToRight";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import HeroSection from "./HeroSection";

const ContactusPage = () => {
  return (
    <>
      <div className="grid gap-6 ">
        <section className="mt-[120px] lg:mt-[150px]">
          <HeroSection />
        </section>
        <section className="px-4 grid  gap-6 lg:grid-cols-2 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
          <div className="lg:self-center overflow-x-hidden">
            <AnimateToRight>
              <div>
                <ContactDetails />
              </div>
            </AnimateToRight>
          </div>
          <div className="overflow-x-hidden">
            <AnimateToLeft>
              <div>
                <ContactForm />
              </div>
            </AnimateToLeft>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactusPage;
