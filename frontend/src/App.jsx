import React from 'react'

// Importing the components that were extracted to separate files
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Recommendations from './components/Recommendations.jsx'
import Environmental from './components/Environmental.jsx'
import MilestoneCard from './components/MilestoneCard.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider } from './components/theme/ThemeContext.jsx';

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
