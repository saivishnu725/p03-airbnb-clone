import './App.css';
import NavBar from './components/NavBar.js';
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Hero /> */}
      <div className='cards'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
