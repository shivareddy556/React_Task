import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Caluclator from './Components/Mobile2';
import Mobile2 from './Components/Mobile2';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <About />
      <Contact /> */}
      <center>
        <Mobile2 />
      </center>
    </div>
  );
}

export default App;
