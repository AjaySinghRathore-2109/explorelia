import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchResultsList } from './SearchResultsList.jsx';
import axios from 'axios';

const Hero = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [results, setResultsLocal] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  
  
  useEffect(() => {
    fetch(`/api/search`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success && data.pids) {
          setAllPlaces(data.pids);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fetchData = (value) => {
    const filteredResults = allPlaces.filter((pid) => {
      return value && pid && pid.toLowerCase().includes(value.toLowerCase());
    });
    setResults(filteredResults);
    setResultsLocal(filteredResults);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center text-white">
      <video autoPlay className="absolute inset-0 w-full h-full object-cover" loop muted playsInline>
        <source src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs1AeK79zbrPan4MG7GCdxSbRFclAzPPTcaIA6ioHCEmK5L0mh-kQqePrsKsppRxvLG7n5IyPY0BKDqPZ-IYd-ThejK8ZBVvqJK40f2N_rOVyc64TDa7SJHXzlYdx5GFhprA0P6SrOK1Phfo_JAiaaLeFKYUIoY8QNB0UCB_7xP4xtLzNYquGtsa9UfWhMljGD24f7sUGC7zeT30JzJ27gD71MNp7gndwzTKvvHy4JmoEbMj5Gr9oYp8ir0peTaiurMFhnCLQf5yg" type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Explore the Soul of India</h1>
        <p className="max-w-2xl text-lg md:text-xl font-light">Discover the diverse landscapes, rich cultures, and timeless traditions of India. Your journey begins here.</p>
 
          <div className='input-wrapper'>
            <FaSearch id="search-icon" />
            <input placeholder="Where to? e.g., 'Kerala backwaters' or 'Himalayan peaks'" 
            value={input}
            onChange={(e) => handleChange(e.target.value)} />
          </div>
          {results.length > 0 && <SearchResultsList results={results} />}
          
      </div>
    </div>
  );
};

export default Hero;
