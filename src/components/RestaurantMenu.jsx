import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); //Hook

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "http://localhost:5000/fetchproduct/fetchproduct/" + resId
  //   );

  //   //convert data to json
  //   const jsonData = await data.json();
  //   console.log("resulkt", jsonData);
  //   setResInfo(jsonData);
  // };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="px-4 py-2 bg-green-100 m-4 rounded-lg">
      {/* {resInfo.map((item, index) => (
        <div key={index}> */}
      {/* <h1>{item.name}</h1>
          <h2>{item.avgRating}</h2> */}
      <h3>Menu</h3>
      <ul>
        {resInfo.menu.map((menuItem, menuIndex) => (
          <li key={menuIndex}>{menuItem.name}</li>
        ))}
      </ul>
    </div>
    //       ))}
    //     </div>
  );
};

export default RestaurantMenu;
