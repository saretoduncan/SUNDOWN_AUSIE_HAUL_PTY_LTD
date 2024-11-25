import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationComponents/NavigationBar";

function App() {
  return (
    <>
      <div className="min-h-screen grid">
        <div>
          <header className="fixed w-full bg-[#11111130]">
            <NavigationBar />
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
