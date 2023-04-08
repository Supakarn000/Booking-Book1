import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.type}</span>
        <span className="siTaxiOp">{item.publisher}</span>
        <span className="siFeaturess">
          {item.title}
        </span>
        <span className="siFeatures">
          {item.des}
        </span>
      </div>
      <div className="siDetailTexts">
        <span className="siTaxOp">{item.bookcode}</span>
        <Link to={`/books/${item._id}`}>
          <button className="siCheckButton">Check Availability</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchItem;
