import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantsOfList, setRestaurantsOfList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();

    setRestaurantsOfList(
      // optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantsOfList;
};

export default useRestaurantList;
