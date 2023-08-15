import Header from "../components/Header/Header";

const DetailsPage = () => {
  return (
    <div>
      <Header
        headerComponent={() => (
          <h2 className="movie-details-header">Movie Details</h2>
        )}
      />
    </div>
  );
};

export default DetailsPage;
