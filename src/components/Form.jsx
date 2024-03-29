import React, {useState} from 'react' 

function Form({setStrains, strains}) {
 
      const [strainData, setStrainData] = useState({
        id: "",
        name: "",
        strain: "",
        species: "",
        image: "",
        manages: "",
        top_effect: "",
        flavor_and_aroma: "",
        thc: "",
        rating: ""
    })
    
    const handleChange = (e) => {
      const updatedFormData = {...strainData , [e.target.name]: e.target.value}
      setStrainData(updatedFormData)
    }
    
    const handleSubmit =(e) => {
      e.preventDefault();
      const placeholder = "https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=350&dpr=2"
      const image = strainData.image === "" ? placeholder : strainData.image
      const updatedStrainObj = {...strainData, image}
      
      fetch("http://localhost:3000/strains", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(updatedStrainObj)
      })
      .then((r) => r.json())
      .then((newStrain) => {
        setStrains ([...strains, newStrain]);
        clearForm()
      })
    }

    function clearForm() {
      setStrainData({
        name: "",
        strain: "",
        species: "",
        image: "",
        manages: "",
        top_effect: "",
        flavor_and_aroma: "",
        thc: "",
        rating: ""
    });
    }


  return (
    <div>
        <h1>Select Your Strain</h1>
        <form className="my-form" onSubmit={handleSubmit}>
        
            <div className="form-group">
              <label> Name: </label>
              <input type="text" name="name" value={strainData.name} onChange={handleChange}></input>

            </div>
            <div className="form-group">
              <label> Strain: </label>
              <input type="text" name="strain" value={strainData.strain} onChange={handleChange}></input>
              
            </div>
            <div className="form-group">
              <label> Species: </label>
              <input type="text" name="species" value={strainData.species} onChange={handleChange}></input>
              
            </div>
            <div className="form-group">
              <label> Image: </label>
              <input type="text" name="image" placeholder={strainData.image} value={strainData.image} onChange={handleChange}></input>
              
            </div>
            <div className="form-group">
              <label> Manges: </label>
              <input type="text" name="manages" placeholder="" value={strainData.manages} onChange={handleChange}></input>
            
            </div>
            <div className="form-group">
              <label> Effect: </label>
              <input type="text" name="top_effect" value={strainData.top_effect} onChange={handleChange}></input>
              
            </div>
            <div className="form-group">
              <label> Flavor & Aroma: </label>
              <input type="text" name="flavor_and_aroma" value={strainData.flavor_and_aroma} onChange={handleChange}></input>
              
            </div>
            <div className="form-group">
              <label> THC: </label>
              <input type="text" name="thc" value={strainData.thc} onChange={handleChange}></input>
              
            </div>
            <div className="form-group">
              <label> Rating: </label>
              <input type="text" name="rating" value={strainData.rating} onChange={handleChange}></input>
              
            </div>
            <button className="button" type="submit"> Submit </button>
        </form>
        
     </div>
  )
}

export default Form;