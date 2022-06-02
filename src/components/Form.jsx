import React, {useState} from 'react'

function Form() {
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
    const [strains, setStrains] = useState([]);

    // const [sortBy, setSortBy] = useState("")

    const createStrain = (strainObj) => {
      fetch("http://localhost:3000/strains", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(strainObj)
      })
      .then((r) => r.json())
      .then((newStrain) =>setStrains(previousStrains => [...previousStrains, newStrain]))
    }

    const handleSubmit =(e) => {
      e.preventDefault();
      createStrain(strainData);
    }


const handleChange = (e) => {
  const updatedFormData = {...strainData , [e.target.name]: e.target.value}
  setStrainData(updatedFormData)
}


  return (
    <div className="diagnoses">
        <h1>Select Your Strain</h1>
        {/* <br></br> */}
        <form onSubmit={handleSubmit}>
            {/* <input type="text" name="name" placeholder="" value={strainData.name}/> */}
            <input type="text" name="strain" placeholder="strain" value={strainData.strain} onChange={handleChange} />
            <input type="text" name="species" placeholder="species" value={strainData.species} onChange={handleChange} />
            {/* <input type="text" name="image" placeholder="" value={strainData.image} /> */}
            <input type="text" name="top_effect" placeholder="effect" value={strainData.top_effect} onChange={handleChange} />
            <input type="text" name="flavor_and_aroma" placeholder="flavor" value={strainData.flavor_and_aroma} onChange={handleChange} />
            <input type="number" name="THC" placeholder="THC%" value={strainData.THC} onChange={handleChange} />
            <input type="text" name="rating" placeholder="rating" value={strainData.rating} onChange={handleChange} />
            <button type="submit"> Add Strain</button>
        </form>
        
     </div>
  )
}

export default Form;

//add a default image to the form. Also, comment the name back in on line 34