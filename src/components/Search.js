import React from "react";


function Search( {searchBox, setSearchBox} ) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchBox}
        onChange={(e) => setSearchBox(e.target.value)}
      />
    </div>
  );
}

export default Search;
