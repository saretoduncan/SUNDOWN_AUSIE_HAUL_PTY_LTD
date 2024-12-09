import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";
import WhyUs from "./WhyUs";

const AboutPage = () => {
  return (
    <>
      <div className="grid gap-12">
        <section>
          <HeroSection />
        </section>
        <section>
          <WhoAreWe />
        </section>
        <section>
          <WhyUs/>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
