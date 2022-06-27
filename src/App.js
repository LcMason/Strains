import './App.css';
import React, {useState} from 'react'
import Navbar from "./components/Navbar"

import Header from "./components/Header";
import Container from "./components/Container";
import Form from "./components/Form"
import About from "./components/About"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'

function App() {

//   const [strainData, setStrainData] = useState({
//     name: "",
//     strain: "",
//     species: "",
//     image: "",
//     manages: "",
//     top_effect: "",
//     flavor_and_aroma: "",
//     THC: "",
//     rating: ""
// })

  // const [strains, setStrains] = useState([]);

  // const handleSubmit =(e) => {
  //   e.preventDefault();
  //   const placeholder = "https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=350&dpr=2"
  //   const newStrainImage = strainData.image === "" ? placeholder : strainData.image
  //   const updatedStrainObj = {...strainData, newStrainImage}
  //   console.log(newStrain)
  //   setStrainData(updatedStrainObj)
  //   fetch("http://localhost:3000/strains", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(newStrain)
  //   })
  //   .then((r) => r.json())
  //   .then((newStrain) => setStrains ([...strains, newStrain]));
	// 	    setStrainData("");
  //       e.target.reset();
  // }

  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/form">
          <Form />
        </Route> 
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Container />
        </Route>
      </Switch>
    </div>

  )}


export default App;
