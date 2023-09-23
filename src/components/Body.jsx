import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsOfList, setRestaurantsOfList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantsOfList(
      // optional chaining
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering

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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
