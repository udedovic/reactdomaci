import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import {Route, Link} from 'react-router-dom'
import Meni from './Meni'
import React, {useState} from 'react'
import SongsForm from './SongsForm'
import SongList from './SongList'

function App() {

  const [songs, setSongs] = useState([]);

  function addSong(song) {
    setSongs([song, ...songs]);
  }

  return (
    <div className="App">
      <Meni />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />

      <SongsForm addSong={addSong} />
      <SongList songs={songs}/>

    </div>
  );
}

export default App;
