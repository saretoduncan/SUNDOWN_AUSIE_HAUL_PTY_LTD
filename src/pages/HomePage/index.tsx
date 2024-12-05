import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <div className="grid gap-6">
        <section>
          <HeroSection />
        </section>
        <section>
          <WhyChooseUs />
        </section>
      </div>
    </>
  );
};

export default HomePage;
