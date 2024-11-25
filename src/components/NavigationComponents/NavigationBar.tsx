import SideNav from "./SideNav";
import TopNav from "./TopNav";

const NavigationBar = () => {
  return (
    <>
      <div className="relative">
        <section className="relative z-20">
          <TopNav />
        </section>
        <section className="absolute top-0 bg-gray-50 w-full pt-24 px-4 py-4 shadow-md rounded-md ">
          <SideNav />
        </section>
      </div>
    </>
  );
};

export default NavigationBar;
