import React, {useEffect, useState} from 'react'
import Card from './Card';

function Container() {
    const [strains, setStrains] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3004/strains")
            .then((r) => r.json())
            .then((strains) => setStrains(strains));
    }, []);
    

   

    // const strainCards = strains.map((strain) => {
    //     return <Card strain={strain} />
    // }


  return (
    <div>
       { strains.map((strain) => <Card strain={strain}  />) }
    </div>
  )
}

export default Container;