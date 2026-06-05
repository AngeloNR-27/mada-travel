import Nav from "../components/Nav";
import baobab from "../assets/baobab.png";
import HeroContent from "../components/HeroContent";

function Hero() {
  return (
    <div className="relative  overflow-hidden">

      <img
        src={baobab}
        className="absolute inset-0 w-full h-full object-cover animate-zoom"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex justify-center">
        <div className="w-4/5">
          <Nav />
          <div className="flex items-center h-screen">
            <HeroContent />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;