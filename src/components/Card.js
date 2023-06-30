import star from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      {/* 
      img
      star, rating out of 5 (total ratings), Location
      Description
      From $xyz / person
    */}

      {/* image, rating, total_rating, location, title, price */}
      <img className="card-image" src={props.image} alt="card-pic" />
      <div className="card-text">
        <div>
          <img src={star} alt="Star" />
          <span> {props.rating} </span>
          <span className="gray"> ({props.total_rating}) </span>
          <span className="gray"> . {props.location} </span>
        </div>
        <p> {props.title} </p>
        <p>
          <span className="bold"> From ${props.price} </span>
          <span> / person </span>
        </p>
      </div>
    </div>
  );
}

export default Card;

// <div className="card">
// {/*
// img
// star, rating out of 5 (total ratings), Location
// Description
// From $xyz / person
// */}
// <img className="card-image" src={img1} alt="katie" />
// <div className="card-text">
//   <div>
//     <img src={star} alt="Star" />
//     <span> 5.0 </span>
//     <span className="gray"> (6) </span>
//     <span className="gray"> . USA </span>
//   </div>
//   <p> Life lessons with Katie Zaferes </p>
//   <p>
//     <span className="bold"> From $136 </span>
//     <span> / person </span>
//   </p>
// </div>
// </div>
