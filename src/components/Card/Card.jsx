import "./Card.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { API_POSTER_URL } from "../../constants/urls";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/details/${movie?.id}`}>
        <img
          className="card-image"
          src={`${API_POSTER_URL}/${movie?.poster_path}`}
          alt={`${movie?.original_title}`}
        />
      </Link>
      <div className="card-text">
        <span className="title">
          <strong>{movie?.original_title}</strong>
        </span>
        <Rating value={(movie?.vote_average / 2).toFixed(2)} />
      </div>
      <div className="description">{movie?.overview}</div>
    </div>
  );
};

export default Card;
