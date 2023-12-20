import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State variable - Super powerful variable.

  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      type: "F",
      name: "ICE-CREAM",
      cuisine: ["Choclate", "Gava", "Mango"],
      avgRating: 4,
      costForTwo: 500,
      deliveryTime: 38,
    },
    {
      type: "F",
      name: "Dominos",
      cuisine: ["Burger", "Fries", "Chicken"],
      avgRating: 5,
      costForTwo: 500,
      deliveryTime: 38,
    },
    {
      type: "F",
      name: "MCD",
      cuisine: ["Burger", "Fries", "Chicken"],
      avgRating: 4.1,
      costForTwo: 500,
      deliveryTime: 38,
    },
  ]);

  //To modify above useState.

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic

            const filteredList = listOfRestaurants.filter((res) => {
              return res.avgRating > 4;
            });

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Resto
        </button>
      </div>
      <div className="rest-container">
        {/* RestaurantCard */}
        {/* array map function  */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
