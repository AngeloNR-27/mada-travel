import './App.css'
import Hero from './pages/Hero'
import StatsSection from './components/StatsSection'

function App() {
 

  return (
    <>
    <div className='bg-[#fdfcf8]'>
        <Hero/>
    </div>
    <div className="Stats">
      <StatsSection/>
    </div>
    </>
  )
}

export default App
