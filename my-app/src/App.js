import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
