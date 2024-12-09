import CallToActionComponent from "../../components/CallToActionComponent";
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
        <section className="mt-8">
          <CallToActionComponent/>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
