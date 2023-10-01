import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OnlineStatus from "./OnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();
  const restaurantsOfList = useRestaurantList();

  useEffect(() => {
    setFilteredRestaurant(restaurantsOfList);
  }, [restaurantsOfList]);

  // Conditional Rendering

  if (onlineStatus) {
    return restaurantsOfList.length === 0 || filteredRestaurant.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="">
        <div className="flex gap-5 m-4">
          <div>
            <input
              type="text"
              className=" w-96 bg-orange-400 font-semibold rounded me-5 p-3 outline-none text-white"
              value={search}
              placeholder="Serach here........."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="p-3 bg-orange-600 rounded text-white"
              type="button"
              onClick={() => {
                // Search logic to see restaurants
                const searchedRestaurant = restaurantsOfList.filter((res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredRestaurant(searchedRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="p-3 bg-orange-600 rounded text-white"
              type="button"
              onClick={() => {
                // Filter logic for top rated restaurants
                const filteredList = restaurantsOfList.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 px-4 min-h-560 text-lg text-white">
          {filteredRestaurant.map((restaurant) => (
            <Link
              className="headers"
              key={restaurant.info.id}
              to={"/resturants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return <OnlineStatus />;
  }
};

export default Body;
