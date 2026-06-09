import {Compass, Leaf, ShieldCheck, Sparkles} from 'lucide-react'

function FeaturesSection(){
    return (
        <>
        <div className='flex justify-center bg-[#004623] py-16 md:py-30'>
            <div className='w-4/5 bloc md:flex'>

                <div className='w-full md:w-1/2 text-white md:pr-10 mb-8'>
                    <span className='text-sm uppercase text-gray-300'>Pourquoi Madagascar</span>
                    <h1 className="text-white font-extrabold leading-[1.05] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif py-4">
                        Un voyage qui redonne à l’île qui vous a tout offert.
                    </h1>
                    <p className='text-base'>
                        Nous sommes une petite équipe de guides malgaches, de naturalistes et de designers. Chaque itinéraire est conçu autour de lodges communautaires, de projets de conservation et du rythme des saisons — et non d’un catalogue générique.
                    </p>
                </div>

                <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">

                    <div className='bg-white/10 rounded-xl border-1 border-white/30 p-4'>
                        <Compass className='text-yellow-500'/>
                        <h1 className='font-bold text-xl py-2'>Design sur mesure</h1>
                        <p className='text-sm'>
                            Chaque voyage est co-créé avec vous.
                        </p>
                    </div>

                    <div className='bg-white/10 rounded-xl border-1 border-white/30 p-4'>
                        <Leaf  className='text-yellow-500'/>
                        <h1 className='font-bold text-xl py-2'>Éco-responsable</h1>
                        <p className='text-sm'>
                            1 % du chiffre d’affaires finance la reforestation.
                        </p>
                    </div>

                    <div className='bg-white/10 rounded-xl border-1 border-white/30 p-4'>
                        <ShieldCheck  className='text-yellow-500'/>
                        <h1 className='font-bold text-xl py-2'>Sécurité avant tout</h1>
                        <p className='text-sm'>
                            Assistance sur place 24h/24 et 7j/7.
                        </p>
                    </div>

                    <div className='bg-white/10 rounded-xl border-1 border-white/30 p-4'>
                        <Sparkles  className='text-yellow-500'/>
                        <h1 className='font-bold text-xl py-2'>Accès privilégié</h1>
                        <p className='text-sm'>
                            Artisans locaux, lodges cachés.
                        </p>
                    </div>

                    

                </div>

            </div>
        </div>
        </>
    )
}

export default FeaturesSection