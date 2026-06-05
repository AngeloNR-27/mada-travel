import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  const linkClass = (name) =>
    `block px-4 py-2 rounded-full transition ${
      active === name
        ? "bg-white/20 text-white"
        : "text-white/80 hover:bg-white/20 hover:text-white"
    }`;

  const handleClick = (name) => {
    setActive(name);
    setOpen(false); 
  };

  return (
    <div className="flex items-center justify-between mt-10">

   
      <div className="flex items-center gap-2">
        <div className="bg-[#007b63] text-white p-2 rounded-full font-bold">
          MT
        </div>
        <span className="text-white font-medium">Mada-Travel</span>
      </div>


      <nav className="hidden md:block">
        <ul className="flex gap-2">
          <li><a onClick={() => setActive("accueil")} className={linkClass("accueil")}>Accueil</a></li>
          <li><a onClick={() => setActive("circuits")} className={linkClass("circuits")}>Circuits</a></li>
          <li><a onClick={() => setActive("apropos")} className={linkClass("apropos")}>À propos</a></li>
          <li><a onClick={() => setActive("contact")} className={linkClass("contact")}>Contact</a></li>
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

   
      <div
        className={`absolute top-22 left-0 w-full bg-gray/80 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col p-4 gap-2">
          <li><a onClick={() => handleClick("accueil")} className={linkClass("accueil")}>Accueil</a></li>
          <li><a onClick={() => handleClick("circuits")} className={linkClass("circuits")}>Circuits</a></li>
          <li><a onClick={() => handleClick("apropos")} className={linkClass("apropos")}>À propos</a></li>
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