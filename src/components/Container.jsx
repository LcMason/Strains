import React, {useEffect, useState} from 'react'
import Card from './Card';
import Search from './Search'

function Container() {
    const [strains, setStrains] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
      fetch("http://localhost:3000/strains")
        .then((r) => r.json())
        .then((strains) => setStrains(strains));
    }, []);
      
    // const createStrain = (strainObj) => {
    //   fetch("http://localhost:3000/strains", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(strainObj)
    //   })
    //   .then((r) => r.json())
    //   .then((newStrain) =>setStrains(previousStrains => [...previousStrains, newStrain]))
    // }

    const filteredStrainsArr = strains.filter((strain) => {
      return strain.manages.toLowerCase().includes(searchTerm.toLowerCase());
    })

  return (
    <div>
       {/* <Form createStrain={createStrain} /> */}
      <br></br>
      <br></br>
       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredStrainsArr={filteredStrainsArr} />
       {filteredStrainsArr.map((strain) => <Card strain={strain} key={strain.id} />)} 
    </div>
  )
}

export default Container;