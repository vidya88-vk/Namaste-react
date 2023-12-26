import Body from "./Body";
import { LOGO_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  // restructre the resData
  const { name, cuisine, avgRating, costForTwo, deliveryTime, img } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img className="rounded-lg" alt="res-logo" src={LOGO_URL} />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} Star</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
