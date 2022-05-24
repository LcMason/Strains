import React, {useEffect, useState} from 'react'
import Card from './Card';
import Form from './Form';

function Container() {
    const [strains, setStrains] = useState([]);


    useEffect(() => {
      fetch("http://localhost:3004/strains")
        .then((r) => r.json())
        .then((strains) => setStrains(strains));
    }, []);
    
    const createStrain =(strainObj) => {
      fetch("http://localhost:3004/strains", {
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

   

    const strainCards = strains.map((strain) => {
        return <Card strain={strain} key={strain.id} />
    })


  return (
    <div>
       {strainCards}
       <Form createStrain={createStrain} />
    </div>
  )
}

export default Container;