import CallToActionComponent from "../../components/CallToActionComponent";
import FaqsSection from "./FaqsSection";
import HeroSection from "./HeroSection";
import ServicesPreviewSection from "./ServicesPreviewSection";
import WhyChooseUs from "./WhyChooseUs";
import {Helmet} from "react-helmet"

const HomePage = () => {
  return (
    <>
   <Helmet>
    <title>Sundown Aussie Haul -  Home Page</title>
   </Helmet>
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
        <section>
          <FaqsSection />
        </section>
      </div>
    </>
  );
};

export default HomePage;
