import { Star } from "lucide-react";

function Testimonials() {
  return (
    <section className="py-40  text-white">
      <div className="w-11/12 md:w-4/5 mx-auto">

        <div className="text-center mb-12">
          <span className="uppercase text-sm text-yellow-500 font-medium">
            Les mots des voyageurs
          </span>

          <h1 className="text-gray-900 font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mt-4">
            L’île reste en vous, bien longtemps <br />
            après votre départ.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white border-1 border-gray-600/50 p-6 rounded-2xl shadow-lg">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              « De la première demande par email jusqu’au dernier coucher de soleil, tout était parfait. L’équipe de Hery connaît chaque recoin de l’île. »
            </p>

            <span className="block mt-4 text-gray-900 text-sm font-bold">
              Camille D. · Paris, France
            </span>
          </div>

          <div className="bg-white border-1 border-gray-600/50 p-6 rounded-2xl shadow-lg">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              « Un voyage véritablement transformateur. La journée en catamaran à Nosy Iranja ressemblait à un rêve éveillé. »
            </p>

            <span className="block mt-4 text-gray-900 text-sm font-bold">
              James R. · Londres, Royaume-Uni
            </span>
          </div>

          <div className="bg-white border-1 border-gray-600/50 p-6 rounded-2xl shadow-lg">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              « Face à un baleineau à Sainte-Marie, les yeux dans les yeux. J’ai pleuré, mon mari aussi. Ça valait chaque instant. »
            </p>

            <span className="block mt-4 text-gray-900 text-sm font-bold">
              Yuki S. · Tokyo, Japon
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;