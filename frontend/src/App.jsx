import React, { useEffect } from 'react'

// Importing the components that were extracted to separate files
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Recommendations from './components/Recommendations.jsx'
import Environmental from './components/Environmental.jsx'
import MilestoneCard from './components/MilestoneCard.jsx'
import Footer from './components/Footer.jsx'
import { useTheme } from './context/ThemeContext.jsx'

const App = () => {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <>
      <Navbar />
      <Hero onPlan={() => alert('Smart Planner (coming soon)')} onExploreEnv={() => {
        const el = document.querySelector('#env-snap')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }} />
      <div id="env-snap" />
      <Environmental />
      <Recommendations />
      <MilestoneCard />
      <Footer />
    </>
  )
}

export default App
