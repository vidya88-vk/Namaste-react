import Body from "./Body";
import { LOGO_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);

  // restructre the resData
  const { name, cuisine, avgRating, costForTwo, deliveryTime } = resData;
  return (
    <div className="rest-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={LOGO_URL} />
      <h3>{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} Star</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
