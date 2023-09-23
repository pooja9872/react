import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsOfList, setRestaurantsOfList] = useState([]);
  const [search, setSearch] = useState("");

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
  };

  // Conditional Rendering

  return restaurantsOfList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="search-btn"
          type="button"
          onClick={() => {
            // Search logic to see restaurants
            const searchedValue = restaurantsOfList.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setRestaurantsOfList(searchedValue);
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
            setRestaurantsOfList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantsOfList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
