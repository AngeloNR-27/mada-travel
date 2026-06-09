function CTA() {
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

                    <button className="bg-white/20 border border-white/40  text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
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

                </div>
            </section>  
            
        </div>  
    </>

  );
}

export default CTA;