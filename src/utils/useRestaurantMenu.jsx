import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://localhost:5000/fetchproduct/fetchproduct/" + resId
    );

    const json = await data.json();

    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
