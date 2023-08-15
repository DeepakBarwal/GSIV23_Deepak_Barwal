import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Rating from "../components/Rating/Rating";
import {
  useGetParticularMovieQuery,
  useGetMovieCreditsQuery,
} from "../store/slices/moviesApiSlice";
import { API_POSTER_URL } from "../constants/urls";
import { minutesToHhMm } from "../utils/index";

const DetailsPage = () => {
  const { id: movieId } = useParams();
  const { data: movieDetails, isLoadingMovie } = useGetParticularMovieQuery({
    movieId,
  });
  const { data: movieCredits, isLoadingCredits } = useGetMovieCreditsQuery({
    movieId,
  });

  const director = movieCredits?.crew?.find(
    (crewmate) => crewmate.job.toLowerCase() === "director"
  );

  return (
    <div>
      <Header
        headerComponent={() => (
          <h2 className="movie-details-header">Movie Details</h2>
        )}
      />
      {isLoadingMovie && isLoadingCredits ? (
        "Loading..."
      ) : (
        <div className="details-container">
          <img
            src={
              movieDetails
                ? `${API_POSTER_URL}${movieDetails?.poster_path}`
                : ""
            }
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
              {movieDetails?.runtime
                ? `${minutesToHhMm(parseInt(movieDetails?.runtime))}`
                : "Unknown"}{" "}
              | {director?.name}
            </p>
            <div className="movie-cast">
              Cast:{" "}
              {movieCredits?.cast?.map((actor) => (
                <div key={actor.id}>
                  {actor.character} played by{" "}
                  <strong>{actor.original_name}</strong>
                </div>
              ))}
            </div>
            <p className="movie-description">
              Description: {movieDetails?.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
