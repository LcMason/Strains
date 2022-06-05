import React from "react";


function Search({searchTerm, setSearchTerm, filteredStrainsArr}) {







    return (
        <div>
            <label htmlFor="search">Wellness Check: </label>
      <input
        type="text"
        id="search"
        placeholder="Search Diagnosis..."
        onChange={(e) => setSearchTerm(e.target.value)}
        //how is onChange there an onChange callback function with no onChange function written in Search componenet
      />
        </div>
    )


}


export default Search;