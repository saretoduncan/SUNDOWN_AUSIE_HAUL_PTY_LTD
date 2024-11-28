import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationComponents/NavigationBar";
import NavbarContextWrapper from "./context/NavbarContextWrapper";

function App() {
  return (
    <>
      <div className="min-h-[2000px] grid text-gray-700 relative">
        <div>
          <header className=" fixed  w-full z-50 ">
            <NavbarContextWrapper>
              <div className="w-full   bg-transparent">
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

        <footer className="self-end h-[100px]">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
