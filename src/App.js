import './App.css';
import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Container from "./components/Container";
import Form from "./components/Form"
import About from "./components/About"
import {Route, Switch} from 'react-router-dom'

function App() {
  const [strains, setStrains] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/strains")
      .then((r) => r.json())
      .then((strains) => setStrains(strains));
  }, []);


  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/form">
          <Form setStrains={setStrains} strains={strains} />
        </Route> 
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Container strains={strains} />
        </Route>
      </Switch>
    </div>

  )}


export default App;
