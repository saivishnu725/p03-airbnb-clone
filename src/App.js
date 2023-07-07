import "./App.css";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import CardData from "./components/CardData.js";

function App() {
  //image, rating, total_rating, location, title, price

  const cards = CardData.map((c) => (
    <Card
      key={c.key}
      image={c.image}
      rating={c.rating}
      total_rating={c.total_rating}
      location={c.location}
      title={c.title}
      price={c.price}
    />
  ));

  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Hero />
        <div className="cards"> {cards} </div>
      </div>
    </div>
  );
}

export default App;
