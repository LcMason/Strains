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
  
      const filteredStrainsArr = strains.filter((strain) => strain.manages.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredStrainsArr={filteredStrainsArr} />
       {filteredStrainsArr.map((strain) => <Card strain={strain} key={strain.id} />)} 
    </div>
  )
}

export default Container;

