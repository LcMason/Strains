import React, {useEffect, useState} from 'react'
import Card from './Card';

function Container() {
    const [strains, setStrains] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3004/strains")
            .then((r) => r.json())
            .then((data) => setStrains(data));
    }, []);
    console.log(strains)

   




  return (
    <div>
       { strains.map((strain) => <Card strain={strain}  />) }
    </div>
  )
}

export default Container;