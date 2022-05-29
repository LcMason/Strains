function Filter() {
// Add a check box
    return (
        <div>
            
            <select>
                {/* // name="sort"
				// onChange={handleChangeSortBy}
				// value={sortBy} */}
                
                <h1>What is your diagnoses?</h1>
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
				<option value="Appetite loss">Appetite loss</option>
		    </select>

        </div>
    )
}

export default Filter;