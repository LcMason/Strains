import React, {useState} from 'react'

function Form({createStrain}) {
    const [strainData, setStrainData] = useState({
        name: "",
        strain: "",
        species: "",
        image: "",
        top_effect: "",
        flavor_and_aroma: "",
        THC: "",
        rating: ""
    })

    
// createStrain from Container componenet and add the submit to the form
    const handleSubmit =(e) => {
      e.preventDefault()
      createStrain(strainData)
    }






  return (
    <div className="new-cannabis-form">
        <h1>Select Your Flower</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="" value={strainData.name}/>
            <input type="text" name="strain" placeholder="strain" value={strainData.strain} />
            <input type="text" name="species" placeholder="species" value={strainData.species} />
            <input type="text" name="image" placeholder="" value={strainData.image} />
            <input type="text" name="top_effect" placeholder="effect" value={strainData.top_effect} />
            <input type="text" name="flavor_and_aroma" placeholder="flavor_and_aroma" value={strainData.flavor_and_aroma} />
            <input type="number" name="THC" placeholder="THC%" value={strainData.THC} />
            <input type="text" name="rating" placeholder="rating" value={strainData.rating} />
            <button type="submit"> Add Strain</button>
        </form>
        
     </div>
  )
}

export default Form;