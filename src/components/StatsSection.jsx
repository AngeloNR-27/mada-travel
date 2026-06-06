function StatsSection() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex  justify-center flex-wrap gap-4 md:gap-8 lg:gap-16 text-center uppercase">   

        <div className="w-2/5 md:w-1/5 text-center">
          <div className="text-xl md:text-2xl font-bold text-[#007b63]">12+</div>
          <div className="text-xs text-gray-800 mt-2">
            ans d'expérience
          </div>
        </div>

        <div className="w-2/5 md:w-1/5  text-center">
          <div className="text-xl md:text-2xl font-bold text-[#007b63]">48</div>
          <div className="text-xs text-gray-800 mt-2">
            circuits sélectionnés
          </div>
        </div>

        <div className="w-2/5 md:w-1/5  text-center">
          <div className="text-xl md:text-2xl font-bold text-[#007b63]">380+</div>
          <div className="text-xs text-gray-800 mt-2">
            voyageurs satisfaits
          </div>
        </div>

        <div className="w-2/5 md:w-1/5  text-center">
          <div className="text-xl md:text-2xl font-bold text-[#007b63]">4,9★</div>
          <div className="text-xs text-gray-800 mt-2">
            note moyenne
          </div>
        </div>

      </div>
    </section>
  );
}

export default StatsSection;