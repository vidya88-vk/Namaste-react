import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

  //conditional rendering--rendering on baisi of condition--using ternar operator

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

              console.log(":hii", filterRestaurants);
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
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
