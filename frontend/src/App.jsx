import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Destinations from './components/Destinations.jsx';
import SpecialOffers from './components/SpecialOffers.jsx';
import InteractiveMap from './components/InteractiveMap.jsx';
import BookNowButton from './components/BookNowButton.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Categories />
          <Destinations />
          <SpecialOffers />
          <InteractiveMap />
        </main>
        <BookNowButton />
        <Footer />
      </div>
    </div>
  );
};

export default App;
