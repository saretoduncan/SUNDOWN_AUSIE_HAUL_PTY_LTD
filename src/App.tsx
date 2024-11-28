import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationComponents/NavigationBar";
import NavbarContextWrapper from "./context/NavbarContextWrapper";

function App() {
  return (
    <>
      <div className="min-h-screen grid">
        <div>
          <header className="relative">
            <NavbarContextWrapper>
              <div className="w-full fixed bg-transparent">
                <NavigationBar />
              </div>
            </NavbarContextWrapper>
          </header>
          {/* <main className="">this main</main> */}
        </div>

        <footer className="self-end h-[100px]">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
