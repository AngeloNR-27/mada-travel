import './App.css'
import Hero from './pages/Hero'
import StatsSection from './components/StatsSection'
import CircuitsSection from './components/CircuitsSection'
import FeaturesSection from './components/FeaturesSection'
import Testimonials from './components/Testimonials'

function App() {
 

  return (
    <>
    <div className='bg-[#fdfcf8]'>
        <Hero/>
    </div>
    <div className="Stats">
      <StatsSection/>
    </div>
    <div>
      <CircuitsSection/>
    </div>
    <div> 
      <FeaturesSection/>
    </div>
    <div>
      <Testimonials/>
    </div>
    </>
  )
}

export default App
