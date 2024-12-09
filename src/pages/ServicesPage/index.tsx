import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";

const ServicesPage = () => {
  return (
    <>
      <div className="grid gap-6">
        <section>
          <HeroSection />
        </section>
        <section>
          <WhatWeDo/>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
