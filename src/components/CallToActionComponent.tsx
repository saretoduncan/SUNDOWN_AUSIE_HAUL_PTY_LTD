import { ENavDataTitles } from "../types/types";
import PrimaryLinkButton from "./Buttons/PrimaryLinkButton";

const CallToActionComponent = () => {
  return (
    <>
      <div className="grid p-4 ">
        <div className=" grid gap-2   p-4 px-8 md:p-8 rounded bg-gradient-to-r  from-orange-300 from-10% via-orange-200 via-30%  to-orange-300 to-90% text-shadow  md:grid-cols-2 xl:w-[1024px] xl:mx-auto 2xl:w-[1280px]">
          <div className="grid md:justify-center">
            <h4 className="font-bold text-2xl text-center capitalize text-shadow-md md:text-start md:text-3xl lg:text-4xl">
              Get your haulage Quote Today
            </h4>
          </div>
          <div className="grid gap-4 place-content-center">
            <p className=" text-center text-sm md:text-base  md:font-bold  md:text-start">
              {" "}
              Reach out to us now to receive a personalized quote tailored to
              your specific haulage requirements. Discover how Sundown Ausie
              Haul can make your transport need seamless and efficient.
            </p>
            <div className="grid md:block">
              <PrimaryLinkButton
                linkName="Contact Us Today"
                url={ENavDataTitles.CONTACTS_PAGE}
                customClass="font-bold text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionComponent;
