// src/components/Searchbar.js

import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  // Update state with the search input's value
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle form submission for the search
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="bg-white py-2 px-4 flex items-center border-b border-gray-600">
      <div className="flex items-center ml-8">
        <img src="/images/appLogo.png" alt="App Logo" className="mr-3" width="36" height="36" />
        <span className="font-bold text-black text-2xl">Progress</span>
      </div>
      {/* This is a spacer div that will grow and push the search bar to the center */}
      <div className="flex-grow"></div>
      <form onSubmit={handleSearchSubmit} className="flex items-center border border-gray-600 rounded-lg w-2/5 max-w-4xl">
        <img src="/images/searchLogo.png" alt="Search" className="ml-2" width="20" height="20" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-2 pr-3 py-1 w-full bg-transparent outline-none text-gray-700 placeholder-gray-500" // Adjusted the width to full within its container
        />
      </form>
      {/* Another spacer div to ensure the search bar stays centered */}
      <div className="flex-grow" style={{ flexGrow: 1.5 }}></div>
    </div>
  );
}

export default SearchBar;