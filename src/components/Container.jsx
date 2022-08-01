import React, {useState} from 'react'
import Card from './Card';
import Search from './Search'

function Container({strains}) {
   
    const [searchTerm, setSearchTerm] = useState("")



      const filteredStrainsArr = strains.filter((strain) => strain.manages.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
       <Search setSearchTerm={setSearchTerm} />
       {filteredStrainsArr.map((strain) => <Card strain={strain} key={strain.id} />)} 
    </div>
  )
}

export default Container;

