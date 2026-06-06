import { useState } from "react";

function CircuitsSection() {
  const [active, setActive] = useState("Tout");

  return (
    <section className="flex justify-center bg-[#f6e9d5] ">
      <div className="w-4/5 text-gray-950 p-6">

        <div className="py-20 w-full md:w-1/2">

          <div className="text-[#007b63] text-2xl">
            Nos circuits
          </div>

          <div className="text-4xl md:text-6xl text-gray-900 py-5 font-serif">
            Des voyages soigneusement sélectionnés
          </div>

          <div className="text-xs md:text-sm text-gray-600 pb-5">
            Filtrez selon vos envies — plages, faune sauvage, aventure ou culture.
            Chaque voyage peut être adapté à vos dates et à votre rythme.
          </div>

          <div className="flex gap-2 justify-start mt-4">

            <div
              onClick={() => setActive("Tout")}
              className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer border border-gray-200 transition
              ${active === "Tout" ? "bg-[#007b63] text-white" : "text-gray-600 bg-white hover:bg-[#007b63] hover:text-white"}`}
            >
              Tout
            </div>

            <div
              onClick={() => setActive("Plage")}
              className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer border border-gray-200 transition
              ${active === "Plage" ? "bg-[#007b63] text-white" : "text-gray-600 bg-white hover:bg-[#007b63] hover:text-white"}`}
            >
              Plage
            </div>

            <div
              onClick={() => setActive("Faune")}
              className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer border border-gray-200 transition
              ${active === "Faune" ? "bg-[#007b63] text-white" : "text-gray-600 bg-white hover:bg-[#007b63] hover:text-white"}`}
            >
              Faune
            </div>

            <div
              onClick={() => setActive("Aventure")}
              className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer border border-gray-200 transition
              ${active === "Aventure" ? "bg-[#007b63] text-white" : "text-gray-600 bg-white hover:bg-[#007b63] hover:text-white"}`}
            >
              Aventure
            </div>

            <div
              onClick={() => setActive("Culture")}
              className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer border border-gray-200 transition
              ${active === "Culture" ? "bg-[#007b63] text-white" : "text-gray-600 bg-white hover:bg-[#007b63] hover:text-white"}`}
            >
              Culture
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CircuitsSection;