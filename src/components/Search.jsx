import React from "react";


function Search({setSearchTerm}) {

    return (
        <div>
            <label htmlFor="search"> Wellness Check: </label>
      <input
        type="text"
        id="search"
        placeholder="Search Diagnosis..."
        onChange={(e) => setSearchTerm(e.target.value)} //anonymous function
        
      />
        </div>
    )


}


export default Search;