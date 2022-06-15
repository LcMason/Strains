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


// const diagnoses = [{
//   label:'Insomnia', value: 'Insomnia',
//   label:'Inflammation', value: 'Inflammation',
//   label:'Depression', value: 'Depression',
//   label:'ADHD', value: 'ADHD',
//   label:'Multiple sclerosis', value: 'Multiple sclerosis',
//   label:'Cancer', value: 'Cancer',
//   label:'Anxiety', value: 'Anxiety',
//   label:'Depression', value: 'Depression',
//   label:'Glaucoma', value: 'Glaucoma',
//   label:'Seizures', value: 'Seizures',
//   label:'Muscle spasms', value: 'Muscle spasms',
//   label:'ALS', value: 'ALS',
//   label:'HIV', value: 'HIV',
//   label:'Crohn\'s disease', value: 'Crohn\'s disease',
//   label:'Alzheimer\'s disease', value: 'Alzheimer\'s disease',

// }]


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
  //   setStrainData(updatedStrainObj)
  //   fetch("http://localhost:3000/strains", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(strainData)
  //   })
  //   .then((r) => r.json())
  //   .then((newStrain) => {
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

//add button for light:dark modec