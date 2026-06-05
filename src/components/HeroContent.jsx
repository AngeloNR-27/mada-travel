function HeroContent(){
    return(
        <div className="w-full md:w-3/5">

            <div className="mb-5 inline-block text-white border border-white/30 rounded-full px-6 py-1 text-[10px] md:text-[11px] uppercase tracking-widest bg-white/10">
                L’Île Rouge, réinventée
            </div>

            <h1 className="text-white font-extrabold leading-[1.05] text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Là où les baobabs touchent  <br />
                le ciel et où les lémuriens accueillent l’aube.
            </h1>

            <p className="text-white/80 mt-5 text-sm md:text-base max-w-xl leading-relaxed">
                Des voyages sur mesure à travers les plages, les forêts tropicales et les cathédrales de pierre de Madagascar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <button className="bg-[#007b63] text-white px-5 py-3 rounded-full hover:opacity-90 transition">
                    Explorer les circuits
                </button>

                <button className="bg-white/10 border border-white/30 text-white px-5 py-3 rounded-full hover:bg-white/20 transition">
                    WhatsApp
                </button>

            </div>

            <div className="mt-5 text-white/60 text-xs flex gap-4 flex-wrap">
                <span>⭐ 4.9 / 5</span>
                <span>• 380+ voyageurs</span>
                <span>• Éco-certifié</span>
            </div>

        </div>
    )
}

export default HeroContent