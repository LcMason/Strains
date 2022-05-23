import React from 'react'

function Form() {
    const [strainData, setStrainData] = useState({
        name: "",
        strain: "",
        species: "",
        image: "",
        top_effect: "",
        flavor_and_aroma: ":",
        THC: "",
        rating: ""
    })








  return (
    <div className="new-cannabis-form">
        <h1>Select Your Flower</h1>
        <form>
            <input type="text" name="name" placeholder="" value={strainData.name}/>
            <input type="text" name="strain" placeholder="strain" value={strainData.strain} />
            <input type="text" name="species" placeholder="species" value={strainData.species} />
            <input type="text" name="image" placeholder="" value={strainData.image} />
            <input type="text" name="top_effect" placeholder="effect" value={strainData.top_effect} />
            <input type="text" name="flavor_and_aroma" placeholder="flavor_and_aroma" value={strainData.flavor_and_aroma} />
            <input type="number" name="THC" placeholder="THC%" value={strainData.THC} />
            <input type="text" name="rating" placeholder="rating" value={strainData.rating} />
        </form>
        
     </div>
  )
}

export default Form;