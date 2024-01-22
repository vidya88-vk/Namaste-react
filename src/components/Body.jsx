import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State variable - Super powerful variable.

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //useEffect--Take 2 arguments.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/fetchproduct/fetchproduct");
    console.log("data", data);

    //convert this data to json
    const json = await data.json();
    console.log("json", json);

    //optional chaining -- ?.
    setListOfRestaurants(json);
    setFilteredRestaurant(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks Like you're offline..Please check your internet!!!</h1>;

  //conditional rendering--rendering on bais of condition--using ternary operator

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="serach m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the resraunt card and update the UI
              //searchText

              const filterRestaurants = listOfRestaurants.filter((res) => {
                return res.name.includes(searchText);
              });

              setFilteredRestaurant(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="serach m-3 p-3 flex items-center">
          <button
            className="px-2 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //Filter Logic

              const filteredList = listOfRestaurants.filter((res) => {
                return res.avgRating > 4;
              });

              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* RestaurantCard */}
        {/* array map function  */}
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant._id}>
            {/* if restaurant is promoted add a promoted label to it */}

            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
