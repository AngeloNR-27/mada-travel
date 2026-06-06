import './App.css'
import Hero from './pages/Hero'
import StatsSection from './components/StatsSection'
import CircuitsSection from './components/CircuitsSection'

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
    </>
  )
}

export default App
