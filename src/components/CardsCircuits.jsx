import { MapPin, ArrowUpRight } from "lucide-react";

import nosybe from "../assets/nosybe.png";
import andasibe from "../assets/andasibe.png";
import tsingy from "../assets/tsingy.png";
import baobab from "../assets/baobab.png";
import isalo from "../assets/isalo.png";
import sainteMarie from "../assets/saint.png";

const circuits = [
  {
    title: "Nosy Be – Paradis Tropical",
    location: "Nosy Be",
    category: "Plage",
    description:
      "Lagons turquoise, plages de sable blanc et luxe au naturel pour une escapade inoubliable.",
    duration: "7 jours",
    price: "500 € / pers",
    image: nosybe,
  },
  {
    title: "Andasibe – Forêt des Lémuriens",
    location: "Andasibe",
    category: "Faune",
    description:
      "Immersion dans la jungle tropicale et rencontre avec les lémuriens dans leur habitat naturel.",
    duration: "5 jours",
    price: "1 250 € / pers",
    image: andasibe,
  },
  {
    title: "Tsingy de Bemaraha",
    location: "Tsingy",
    category: "Aventure",
    description:
      "Exploration spectaculaire des formations rocheuses classées UNESCO.",
    duration: "8 jours",
    price: "2 150 € / pers",
    image: tsingy,
  },
  {
    title: "Allée des Baobabs",
    location: "Morondava",
    category: "Culture",
    description:
      "Un paysage iconique de Madagascar au coucher du soleil, magique et intemporel.",
    duration: "4 jours",
    price: "980 € / pers",
    image: baobab,
  },
  {
    title: "Isalo – Canyon & Oasis",
    location: "Isalo",
    category: "Aventure",
    description:
      "Randonnées entre canyons, piscines naturelles et paysages désertiques uniques.",
    duration: "6 jours",
    price: "1 490 € / pers",
    image: isalo,
  },
  {
    title: "Sainte-Marie – Évasion Insulaire",
    location: "Sainte-Marie",
    category: "Plage",
    description:
      "Île sauvage, plages calmes et observation des baleines selon la saison.",
    duration: "7 jours",
    price: "1 690 € / pers",
    image: sainteMarie,
  },
];

function CardsCircuits() {
  return (
    <section className="bg-white flex justify-center py-20">

      <div className="w-4/5">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {circuits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >

              <div
                className="h-64 bg-cover bg-center relative flex items-start p-4"
                style={{ backgroundImage: `url(${item.image})` }}
              >

                <div className="bg-white text-gray-800 font-semibold text-xs px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  <MapPin size={14} />
                  {item.location}
                </div>

              </div>

              <div className="p-4">

                <h1 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h1>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>

              </div>

              <div className="m-4 pt-4 flex justify-between items-end text-sm border-t border-gray-200">

                <div>
                  <p className="font-bold text-gray-900">Durée :</p>
                  <p className="text-gray-500">{item.duration}</p>

                  <p className="font-bold text-gray-900 mt-2">Prix :</p>
                  <p className="text-gray-500">{item.price}</p>
                </div>

                <div className="bg-[#004623] text-white p-2 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
                  <ArrowUpRight />
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CardsCircuits;