import React, {useState} from 'react'


function Card({strain}) {
    // const {id, species, image, top_effect, flavor_and_aroma, THC, rating } = strain
       const [isShowing, setIsShowing] = useState(true)
    

      console.log(strain)

      const handleToggleDetails = () => {
        setIsShowing(!isShowing);
      }

  return (
    <div className="card" onClick={handleToggleDetails}>
            <h2>{strain.strain}</h2>
            <h3>Species - {strain.species}</h3>
            <img src={strain.image} alt={strain.name} className="cannabis-avatar" />
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
