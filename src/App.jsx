import "./App.css";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import StatsSection from "./components/StatsSection";
import CircuitsSection from "./components/CircuitsSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />

      <div id="accueil" className="bg-[#fdfcf8]">
        <Hero />
      </div>

      <div id="circuits">
        <StatsSection />
        <CircuitsSection />
      </div>

      <div id="apropos">
        <FeaturesSection />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;