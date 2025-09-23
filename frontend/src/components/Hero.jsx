import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center text-white">
      <video autoPlay className="absolute inset-0 w-full h-full object-cover" loop muted playsInline>
        <source src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs1AeK79zbrPan4MG7GCdxSbRFclAzPPTcaIA6ioHCEmK5L0mh-kQqePrsKsppRxvLG7n5IyPY0BKDqPZ-IYd-ThejK8ZBVvqJK40f2N_rOVyc64TDa7SJHXzlYdx5GFhprA0P6SrOK1Phfo_JAiaaLeFKYUIoY8QNB0UCB_7xP4xtLzNYquGtsa9UfWhMljGD24f7sUGC7zeT30JzJ27gD71MNp7gndwzTKvvHy4JmoEbMj5Gr9oYp8ir0peTaiurMFhnCLQf5yg" type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Explore the Soul of India</h1>
        <p className="max-w-2xl text-lg md:text-xl font-light">Discover the diverse landscapes, rich cultures, and timeless traditions of India. Your journey begins here.</p>
        <div className="w-full max-w-2xl mt-4">
          <form className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <span className="material-symbols-outlined text-gray-500 pl-4">search</span>
            <input className="form-input w-full flex-1 border-0 focus:ring-0 text-gray-800 placeholder:text-gray-500 py-4 px-4" placeholder="Where to? e.g., 'Kerala backwaters' or 'Himalayan peaks'" value=""/>
            <button className="bg-primary text-white font-bold py-4 px-8 self-stretch hover:bg-primary/90 transition-colors">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
