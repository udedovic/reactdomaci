import './App.css';
import Home from './Home'
import About from './About'
import {Route} from 'react-router-dom'
import Meni from './Meni'
import React from 'react'

function App() {

  return (
    <div className="App" style={{backgroundColor:'#e6ffff'}}>
      <Meni />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />

    </div>
  );
}

export default App;
