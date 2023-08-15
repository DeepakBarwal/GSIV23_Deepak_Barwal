import "./CardList.css";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="card-list">
      {[
        ...Array.from({ length: 20 }).map((item, index) => (
          <Card key={index} />
        )),
      ]}
    </div>
  );
};

export default CardList;
