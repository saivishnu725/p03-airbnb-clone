import grid from "../images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero-grid" src={grid} alt="Hero grid" />
      <h1> Online Experience </h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
