import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Rating from "../components/Rating/Rating";
import { useGetParticularMovieQuery } from "../store/slices/moviesApiSlice";
import { API_POSTER_URL } from "../constants/urls";
import { minutesToHhMm } from "../utils/index";

const DetailsPage = () => {
  const { id: movieId } = useParams();
  const { data: movieDetails, isLoading } = useGetParticularMovieQuery({
    movieId,
  });
  console.log(movieDetails);

  return (
    <div>
      <Header
        headerComponent={() => (
          <h2 className="movie-details-header">Movie Details</h2>
        )}
      />
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="details-container">
          <img
            src={`${API_POSTER_URL}${movieDetails?.poster_path}`}
            alt=""
            className="details-image"
          />
          <div className="details-content">
            <h1 className="movie-title">
              {movieDetails?.original_title}{" "}
              <Rating
                value={(movieDetails?.vote_average / 2).toFixed(2)}
                text={(movieDetails?.vote_average / 2).toFixed(2)}
              />
            </h1>
            <p className="movie-subtitle">
              {movieDetails?.release_date.split("-")[0]} |{" "}
              {`${minutesToHhMm(parseInt(movieDetails?.runtime))} (HH:MM)` ||
                "Unknown"}{" "}
              | Director
            </p>
            <p className="movie-cast">Cast: Actor 1,...</p>
            <p className="movie-description">{movieDetails?.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
