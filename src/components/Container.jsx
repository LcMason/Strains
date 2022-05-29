import React, {useEffect, useState} from 'react'
import Card from './Card';
import Form from './Form';
import Filter from './Filter';

function Container() {
    const [strains, setStrains] = useState([]);
    const [diagnosis, setDiagnosis] = useState([])


    useEffect(() => {
      fetch("http://localhost:3000/strains")
        .then((r) => r.json())
        .then((strains) => setStrains(strains));
    }, []);
      

  //fetching the diagnosis in db.json
      // useEffect(() => {
      //   fetch("http://localhost:3000/diagnosis")
      //     .then((r) => r.json())
      //     .then((diagnosis) => setDiagnosis(diagnosis))
      // })


      // [{}, {}, {} ] => [{}, {}] => [<Card />, <Card />]

      strains.filter((strain) => {
        //if (strain.manages === Insomnia) {  //if strain.manages === any diagnosis within strain.manages, return that specific strian
          // return strain.manages  
        // }
      })






    
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

   

    const strainCards = strains.map((strain) => {
        return <Card strain={strain} key={strain.id} />
    })


  return (
    <div>
       <Form createStrain={createStrain} />
       <Filter />
       {strainCards}
    </div>
  )
}

export default Container;