import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "http://localhost:5000/fetchproduct/fetchproduct/" + resId
    );

    //convert data to json
    const jsonData = await data.json();
    console.log("resulkt", jsonData);
    setResInfo(jsonData);
  };

  if (resInfo === null) return <Shimmer />;

  //const { name, cuisine, avgRating, costForTwo, menu } = resInfo[0]?.menu[0];

  return (
    <div className="menu">
      {resInfo.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.avgRating}</h2>
          <h3>Menu</h3>
          <ul>
            {item.menu.map((menuItem, menuIndex) => (
              <li key={menuIndex}>{menuItem.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
