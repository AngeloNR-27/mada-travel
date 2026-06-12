import { useState } from "react";

function CTA() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    travelers: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Nom requis";
    if (!formData.email) newErrors.email = "Email requis";
    if (!formData.whatsapp) newErrors.whatsapp = "WhatsApp requis";
    if (!formData.travelers) newErrors.travelers = "Nombre de voyageurs requis";
    if (!formData.message) newErrors.message = "Message requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    alert("Demande envoyée");

    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      travelers: "",
      message: "",
    });

    setShowForm(false);
  };

  return (
    <>
        <div className="flex justify-center mb-40">
        <section className="w-4/5 rounded-4xl py-24 bg-[#004623] text-white shadow-lg">
            
            <div className="w-11/12 md:w-4/5 mx-auto text-center">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Madagascar vous attend
            </h2>

            <p className="mt-4 text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                Chaque voyage est unique. Nous concevons votre expérience sur mesure en moins de 24 heures.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                <button
                onClick={() => setShowForm(!showForm)}
                className="bg-white/20 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
                >
                Créer mon voyage
                </button>

                <a
                href="https://wa.me/261XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition"
                >
                Parler à un expert sur WhatsApp
                </a>

            </div>

            {showForm && (
                <div className="mt-10 bg-white text-gray-900 rounded-3xl p-8 text-left max-w-3xl mx-auto
                                animate-[fadeIn_0.3s_ease-in-out]">

                <h3 className="text-2xl font-serif mb-6 text-center">
                    Demande de voyage
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                    <div>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Nom complet"
                        className="border border-gray-300 rounded-xl p-3 w-full"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-xl p-3 w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                    <input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        type="text"
                        placeholder="WhatsApp"
                        className="border border-gray-300 rounded-xl p-3 w-full"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp}</p>}
                    </div>

                    <div>
                    <input
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        type="number"
                        placeholder="Nombre de voyageurs"
                        className="border border-gray-300 rounded-xl p-3 w-full"
                    />
                    {errors.travelers && <p className="text-red-500 text-sm">{errors.travelers}</p>}
                    </div>

                </div>

                <div className="mt-4">
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre voyage idéal..."
                    className="w-full border border-gray-300 rounded-xl p-3 h-32"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                    onClick={handleSubmit}
                    className="mt-6 bg-[#004623] text-white px-6 py-3 rounded-xl w-full hover:opacity-90"
                >
                    Envoyer la demande
                </button>

                </div>
            )}

            </div>

        </section>

        <style>
            {`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            `}
        </style>

        </div>
    </>
  );
}

export default CTA;