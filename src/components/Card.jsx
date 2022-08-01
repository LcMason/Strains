import React, {useState} from 'react'


function Card({strain}) {
   
       const [isShowing, setIsShowing] = useState(false)
    
        const handleToggleDetails = () => {
          setIsShowing(!isShowing);
        }

  return (

    <div className="card" onClick={handleToggleDetails}>
            <h2>{strain.strain}</h2>
            <h3>Species - {strain.species}</h3>
            <img src={strain.image} alt={strain.name} className="cannabis-avatar" />
            <div className="button" > 
              <button> More Info. </button>
            </div>
            {isShowing ? (
              <div>
                <p>Manages - {strain.manages}</p>
                <p>Top Effect - {strain.top_effect}</p>
                <p>Flavor & Aroma - {strain.flavor_and_aroma}</p>
                <p>THC - {strain.THC}</p>
                <p>⭐ ⭐ ⭐ ⭐ ⭐ - {strain.rating}</p> 
              </div>
            ) : null }
    </div>
  )
}

export default Card;
