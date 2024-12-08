import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationComponents/NavigationBar";
import NavbarContextWrapper from "./context/NavbarContextWrapper";
import useChangeOfYAxisHook from "./customHooks/useChangeOfYAxisHook";

function App() {
  const { isYAxisChange } = useChangeOfYAxisHook();
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between text-gray-700 relative bg-slate-50 ">
        <div className="relative">
          <header className=" fixed  w-full z-50 ">
            <NavbarContextWrapper>
              <div
                className={`w-full  translate-all ease-in-out duration-700 ${
                  isYAxisChange ? "bg-orange-50 shadow " : "bg-transparent"
                } `}
              >
                <div className="mx-auto xl:w-[1040px] 2xl:w-[1280px]">
                  <NavigationBar />
                </div>
              </div>
            </NavbarContextWrapper>
          </header>
          <main className="">
            <MainRoutes />
          </main>
        </div>

        <footer className="justify-self-end mt-6">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
