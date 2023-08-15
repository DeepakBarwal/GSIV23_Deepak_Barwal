import "./CardList.css";
import Card from "./Card";

const CardList = ({ movies }) => {
  return (
    <div className="card-list">
      {movies?.map((item, index) => (
        <Card key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default CardList;
