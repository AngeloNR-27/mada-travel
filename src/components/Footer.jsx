import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#004623] text-white py-20">
      <div className="w-11/12 md:w-4/5 mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20 pb-10">

          <div>
            <div className="flex items-center gap-3 mb-4
            ">
              <img
                src="/mada-travel-icon.png"
                alt="Mada Travel Icon"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
              />
              <span className="font-medium text-lg">Mada-Travel</span>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Des voyages sur mesure à travers Madagascar. Une agence locale, éthique, créée par des voyageurs tombés amoureux de la Grande Île Rouge.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">Explorer</h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">Tous les circuits</li>
              <li className="hover:text-white cursor-pointer">À propos</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">Nous contacter</h2>

            <div className="space-y-3 text-sm text-white/80">

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Antananarivo, Madagascar</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+261 34 00 000 00</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>mada-travel-contact@gmail.com</span>
              </div>

            </div>
          </div>

        </div>

        <div className="text-center text-white/60 text-sm mt-6">
          © 2026 Mada Travel. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}

export default Footer;