import "./Card.css";
import Rating from "../Rating/Rating";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <span className="title">Title</span>
        <Rating value={2} />
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed
        harum officia voluptatibus nulla voluptatem maxime rem eveniet! Facilis
        necessitatibus nesciunt tenetur. Quisquam placeat quidem quam
        repellendus error illo saepe!
      </div>
    </div>
  );
};

export default Card;
