import "./App.css";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import img1 from "./images/image-01.png";
import img2 from "./images/image-02.png";
import img3 from "./images/image-03.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Hero /> */}
      <div className="cards">
        {/* image, rating, total_rating, location, title, price */}
        <Card
          image={img1}
          rating="5.0"
          total_rating="6"
          location="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
      </div>
    </div>
  );
}

export default App;
