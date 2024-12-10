const HeroSection = () => {
  return (
    <>
      <div>
        <div
          className="h-[200px] w-full flex items-center px-4 "
          style={{
            backgroundSize: "10px 10px",
            backgroundImage: "radial-gradient(#F9731640 10%, transparent 15%",
          }}
        >
          <div className="xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] px-4">
            <h2 className="text-orange-500 text-4xl font-bold">Contact us</h2>
          </div>
        </div>{" "}
        <div className="px-4">
          <div style={{ width: "100%", height: "100%" }}>
            <iframe
              width="100%"
              height="400"
              style={{ border: "none", margin: "0 0", overflow: "hidden" }}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=47D%20Station%20Street%20Cannington%20WA,%20Perth,%20Australia,%206107+(Sundown%20Aussie%20haul%20PTY%20%20LTD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/" target="_blank">gps devices</a>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
