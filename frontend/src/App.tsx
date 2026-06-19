import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Checks from "./components/Checks";
import Process from "./components/Process";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Checks />
          <Process />
          <Price />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}

export default App;