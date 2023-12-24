import RestaurantCard from "./RestaurantCard";
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
      <div className="filter">
        <div className="serach">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
