// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar"
import Search from "./components/Search"
// import Home from "./components/Home"
import Header from "./components/Header";
import Container from "./components/Container";
import Form from "./components/Form"
import About from "./components/About"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
// import reactRouterDom from 'react-router-dom';
// import Card from './components/Card';

// import Select from 'react-select' 

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


  return (
    <div>
      <Header />
      <Navbar />
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
