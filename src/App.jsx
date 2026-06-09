import './App.css'
import Hero from './pages/Hero'
import StatsSection from './components/StatsSection'
import CircuitsSection from './components/CircuitsSection'
import FeaturesSection from './components/FeaturesSection'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

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
    <div>
      <CTA/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
