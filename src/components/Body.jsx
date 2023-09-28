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
      <div className="body-container">
        <div className="filter-container">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={search}
              placeholder="Serach here........."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="search-btn"
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
          <div className="filter">
            <button
              className="filter-btn"
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
        <div className="res-container">
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
