import React from 'react';

const InteractiveMap = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Interactive Map of India</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">Click on a region to explore destinations and experiences.</p>
        </div>
        <div className="mt-12">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBonIYh2TjbY6VYBViQ8VCoM4ZiXlPo9_2CX1VCR2VjAaxspdLJI8cuAETBDnqYFw3tjAhY4SB5BxXFR0K2juL2lbabiM4Z89uI3_qoPqvTghAXDucX5EcAn-M7lmdKJH-YcEJsCeqIeQw24y5LtbLaPrPNjcctY3fGyplLcCCUCoOrcQ7jAuSYBZ4rGSePCz5FORVCzEhOQTW4Jz5Hh4zpkmf5zkpny92Hlb172xyc9ksyrH7T7Tt81ZtbsiF3BrFr9DcrP0r_EHU"
            alt="Interactive map of India"
            className="w-full aspect-video rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
