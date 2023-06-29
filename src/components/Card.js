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
      <img src={img1} alt="katie" />
      <p>
        <img src={star} alt="Star" />
        5.0 <i> (6) .USA </i>
      </p>
      <p> Life lessons with Katie Zaferes </p>
      <p>
        <b> From $136 </b> / person{" "}
      </p>
    </div>
  );
}

export default Card;
