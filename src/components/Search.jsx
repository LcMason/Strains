import React from "react";


function Search({searchTerm, setSearchTerm, displayedStrains}) {


    





    return (
        <div>
            <label htmlFor="search">Search Diagnosis:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        </div>
    )


}


export default Search;