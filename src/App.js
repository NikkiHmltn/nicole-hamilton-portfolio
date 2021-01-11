import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
         <Route exact path="/" component={Intro} />
         <Route path="/about" component={AboutMe} />
    </div>
  );
}

export default App;
