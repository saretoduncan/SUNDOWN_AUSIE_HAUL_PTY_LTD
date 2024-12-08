import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";

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
      </div>
    </>
  );
};

export default AboutPage;
