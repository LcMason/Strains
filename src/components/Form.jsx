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

    const [sortBy, setSortBy] = useState("")

    const handleSubmit =(e) => {
      e.preventDefault()
      createStrain(strainData)
    }



// const diagnoses = [{
//   label:'Insomnia', value: 'Insomnia',
//   label:'Inflammation', value: 'Inflammation',
//   label:'Depression', value: 'Depression',
//   label:'ADHD', value: 'ADHD',
//   label:'Multiple sclerosis', value: 'Multiple sclerosis',
//   label:'Cancer', value: 'Cancer',
//   label:'Anxiety', value: 'Anxiety',
//   label:'Depression', value: 'Depression',
//   label:'Glaucoma', value: 'Glaucoma',
//   label:'Seizures', value: 'Seizures',
//   label:'Muscle spasms', value: 'Muscle spasms',
//   label:'ALS', value: 'ALS',
//   label:'HIV', value: 'HIV',
//   label:'Crohn's disease', value: 'Crohn's disease',
//   label:'Alzheimer's disease', value: 'Alzheimer's disease',

// }]

function handleChangeSortBy(event) {
  setSortBy(event.target.value)
}


  return (
    <div className="diagnoses">
        <h1>What is your diagnoses?</h1>
        <form onSubmit={handleSubmit}>
        <select
						name="sort"
						onChange={handleChangeSortBy}
						value={sortBy}
          >
						<option value="Insomnia">Insomnia</option>
						<option value="Inflammation">Inflammation</option>
						<option value="Depression">Depression</option>
						<option value="ADHD">ADHD</option>
						<option value="Multiple sclerosis">Multiple sclerosis</option>
						<option value="Cancer">Cancer</option>
						<option value="Anxiety">Anxiety</option>
						<option value="Glaucoma">Glaucoma</option>
						<option value="Seizures">Seizures</option>
						<option value="Muscle Spasms">Muscle spasms</option>
						<option value="ALS">ALS</option>
						<option value="Chron's disease">Chron's disease</option>
						<option value="HIV">HIV</option>
						<option value="Alzheimer's disease">Alzheimer's disease</option>
					</select>
            {/* <input type="text" name="name" placeholder="" value={strainData.name}/>
            <input type="text" name="strain" placeholder="strain" value={strainData.strain} />
            <input type="text" name="species" placeholder="species" value={strainData.species} />
            <input type="text" name="image" placeholder="" value={strainData.image} />
            <input type="text" name="top_effect" placeholder="effect" value={strainData.top_effect} />
            <input type="text" name="flavor_and_aroma" placeholder="flavor_and_aroma" value={strainData.flavor_and_aroma} />
            <input type="number" name="THC" placeholder="THC%" value={strainData.THC} />
            <input type="text" name="rating" placeholder="rating" value={strainData.rating} />
            <button type="submit"> Add Strain</button> */}
        </form>
        
     </div>
  )
}

export default Form;