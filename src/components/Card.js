import img1 from "../images/image-01.png";
import img2 from "../images/image-02.png";
import img3 from "../images/image-03.png";
import star from "../images/star.png";

function Card() {
  return (
    <div className="card">
      {/* 
      img
      star, rating out of 5 (total ratings), Location
      Description
      From $xyz / person
    */}
      <img className="card-image" src={img1} alt="katie" />
      <div className="card-text">
        <div>
          <img src={star} alt="Star" />
          <span> 5.0 </span>
          <span className="gray"> (6) </span>
          <span className="gray"> . USA </span>
        </div>
        <p> Life lessons with Katie Zaferes </p>
        <p>
          <span className="bold"> From $136 </span>
          <span> / person </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
