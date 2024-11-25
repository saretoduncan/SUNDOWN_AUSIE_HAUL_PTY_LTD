import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationComponents/NavigationBar";

function App() {
  return (
    <>
      <div className="min-h-screen grid">
        <header>
          <NavigationBar />
        </header>
        <main>this main</main>

        <footer className="self-end h-[100px]">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
