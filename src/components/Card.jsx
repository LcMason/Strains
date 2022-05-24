import React from 'react'

function Card({strain}) {
    
       
    



  return (
    <div className="card">
        
            <h1> {strain.strain}</h1>
            <h3>Species - {strain.species}</h3>
            <img src={strain.image} alt={strain.name} className="cannabis-avatar" />
            <p>Top Effect - {strain.top_effect}</p>
            <p>Flavor and Aroma - {strain.flavor_and_aroma}</p>
            <p>THC - {strain.THC}</p>
            <p>Rating - {strain.rating}</p> 
            <p>{strain.detailed_species}</p>
        
        




        

    </div>
  )
}

export default Card;
