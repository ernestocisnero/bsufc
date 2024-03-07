import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScoreCards from './components/ScoreCards'
import SeasonSelector from './components/SeasonSelector'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SeasonSelector />
      <ScoreCards />
    </>
  )
}

export default App
