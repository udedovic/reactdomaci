import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import {Route, Link} from 'react-router-dom'
import Meni from './Meni'

function App() {
  return (
    <div className="App">
      <Meni />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />

    </div>
  );
}

export default App;
