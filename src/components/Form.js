import React from 'react'

function Form() {
  return (
    <div className="new-cannabis-form">
        <form>
            <input type="text" name="name" placeholder="" value=""/>
            <input type="text" name="strain" placeholder="strain" value="" />
            <input type="text" name="species" placeholder="species" value="" />
            <input type="text" name="image" placeholder="" value="" />
            <input type="text" name="top_effect" placeholder="effect" value="" />
            <input type="text" name="flavor_and_aroma" placeholder="flavor_and_aroma" value="" />
            <input type="text" name="THC" placeholder="THC%" value="" />
            <input type="text" name="rating" placeholder="rating" value="" />
        </form>
        
     </div>
  )
}

export default Form;