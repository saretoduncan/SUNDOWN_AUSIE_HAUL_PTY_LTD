import CallToActionComponent from "../../components/CallToActionComponent";
import HeroSection from "./HeroSection";
import ServicesPreviewSection from "./ServicesPreviewSection";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <div className="grid gap-8 lg:gap-12 ">
        <section>
          <HeroSection />
        </section>
        <section>
          <WhyChooseUs />
        </section>
        <section>
          <ServicesPreviewSection />
        </section>
        <section>
          <CallToActionComponent />
        </section>
      </div>
    </>
  );
};

export default HomePage;
