import "./Card.css";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { API_POSTER_URL } from "../../constants/urls";

const Card = forwardRef(({ movie }, ref) => {
  const cardBody = (
    <>
      <Link to={`/details/${movie?.id}`}>
        <img
          className="card-image"
          src={`${API_POSTER_URL}/${movie?.poster_path}`}
          alt={`${movie?.original_title}`}
        />
      </Link>
      <div className="card-text">
        <span className="title">
          <strong>{movie?.title}</strong>
        </span>
        <Rating value={(movie?.vote_average / 2).toFixed(2)} />
      </div>
      <div className="description">{movie?.overview}</div>
    </>
  );

  const content = ref ? (
    <div ref={ref} className="card">
      {cardBody}
    </div>
  ) : (
    <div className="card">{cardBody}</div>
  );
  return content;
});

export default Card;
