// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
// import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar"
// import Search from "./components/Search"
// import Home from "./components/Home"
import Header from "./components/Header";
import Container from "./components/Container";
import Form from "./components/Form"
import About from "./components/About"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
// import reactRouterDom from 'react-router-dom';
// import Card from './components/Card';




function App() {

  const [strainData, setStrainData] = useState({
    name: "",
    strain: "",
    species: "",
    image: "",
    manages: "",
    top_effect: "",
    flavor_and_aroma: "",
    THC: "",
    rating: ""
})

  const [strains, setStrains] = useState([]);

  const handleSubmit =(e, newStrain) => {
    e.preventDefault();
    const placeholder = "https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=350&dpr=2"
    const newStrainImage = strainData.image === "" ? placeholder : strainData.image
    const updatedStrainObj = {...strainData, newStrainImage}
    setStrainData(updatedStrainObj)
    fetch("http://localhost:3000/strains", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newStrain)
    })
    .then((r) => r.json())
    .then((newStrain) => setStrains ([...strains, newStrain]));
        e.target.reset();
		    setStrainData("");
  }

  //     setStrains(previousStrains => [...previousStrains, newStrain])
  //     //redirect History Hook
  //   })
  // }


  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/form">
          <Form handleSubmit={handleSubmit} />
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
