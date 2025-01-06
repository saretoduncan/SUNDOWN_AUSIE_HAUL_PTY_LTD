import { Helmet } from "react-helmet";
import CallToActionComponent from "../../components/CallToActionComponent";
import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";
import WhyUs from "./WhyUs";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sundown Aussie Haul - About Us Page</title>
      </Helmet>
      <div className="grid gap-12">
        <section>
          <HeroSection />
        </section>
        <section>
          <WhoAreWe />
        </section>
        <section>
          <WhyUs />
        </section>
        <section>
          <CallToActionComponent />
        </section>
      </div>
    </>
  );
};

export default AboutPage;
