import React from 'react';
import "../components/SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, index) => {
        return (
          <div key={index}>
            {result}
          </div>
        );
      })}
    </div>
  );
};
