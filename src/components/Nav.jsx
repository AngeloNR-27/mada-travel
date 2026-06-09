import { useState, useEffect } from "react";

function Nav() {
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (name) =>
    `block px-4 py-2 rounded-full transition ${
      active === name
        ? "bg-white/20 text-white"
        : "text-white/80 hover:bg-white/20 hover:text-white"
    }`;

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
        scrolled
          ? "bg-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 w-11/12 mx-auto md:px-18">

          <div className="flex items-center gap-2">
            <div className="bg-[#004623] text-white p-2 rounded-full font-bold">
            <img
                src="/mada-travel-icon.png"
                alt="Mada Travel Icon"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
              />
            </div>
            <span className="text-white font-medium">Mada-Travel</span>
          </div>

        <nav className="hidden md:block">
          <ul className="flex gap-2">
            <li><a onClick={() => handleClick("accueil")} className={linkClass("accueil")}>Accueil</a></li>
            <li><a onClick={() => handleClick("circuits")} className={linkClass("circuits")}>Circuits</a></li>
            <li><a onClick={() => handleClick("apropos")} className={linkClass("apropos")}>À propos</a></li>
            <li><a onClick={() => handleClick("testimonials")} className={linkClass("testimonials")}>Témoignages</a></li>
            <li><a onClick={() => handleClick("contact")} className={linkClass("contact")}>Contact</a></li>
          </ul>
        </nav>

        <button className="hidden md:block bg-[#007b63] text-white px-4 py-2 rounded-full hover:opacity-90 transition">
          Réserver
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open && "rotate-45 translate-y-1.5"}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/70 backdrop-blur-md transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col p-4 gap-2">
          <li><a onClick={() => handleClick("accueil")} className={linkClass("accueil")}>Accueil</a></li>
          <li><a onClick={() => handleClick("circuits")} className={linkClass("circuits")}>Circuits</a></li>
          <li><a onClick={() => handleClick("apropos")} className={linkClass("apropos")}>À propos</a></li>
          <li><a onClick={() => handleClick("testimonials")} className={linkClass("testimonials")}>Témoignages</a></li>
          <li><a onClick={() => handleClick("contact")} className={linkClass("contact")}>Contact</a></li>

          <button className="mt-2 bg-[#007b63] text-white px-4 py-2 rounded-full">
            Réserver
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Nav;