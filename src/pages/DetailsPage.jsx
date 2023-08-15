import "./DetailsPage.css";
import Header from "../components/Header/Header";

const DetailsPage = () => {
  return (
    <div>
      <Header
        headerComponent={() => (
          <h2 className="movie-details-header">Movie Details</h2>
        )}
      />
      <div className="details-container">
        <img
          src="https://image.tmdb.org/t/p/original//cVLfO3CbVg8p5Qcaifq6AidOe2w.jpg"
          alt=""
          className="details-image"
        />
        <div className="details-content">
          <h1 className="movie-title">Movie Title (Rating)</h1>
          <p className="movie-subtitle">Year | Length | Director</p>
          <p className="movie-cast">Cast: Actor 1,...</p>
          <p className="movie-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            tenetur est recusandae tempore suscipit iure sequi ratione libero
            dignissimos amet delectus, eveniet, rerum at a architecto? Incidunt
            nemo iste esse?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
