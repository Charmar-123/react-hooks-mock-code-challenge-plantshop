import React, {useState} from "react";

function Search({handleSearch}) {

  const [currentSearch, setCurrentSearch] = useState("");

handleSearch(currentSearch);

  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
