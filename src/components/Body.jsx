import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OnlineStatus from "./OnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();
  const restaurantsOfList = useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

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
            <label>User: </label>
            <input
              type="text"
              className=" w-96 bg-orange-400 font-semibold rounded me-5 p-3 outline-none text-white"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
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
        <div className="flex flex-wrap gap-8 px-4 min-h-600 text-lg text-white">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/resturants/" + restaurant.info.id}
            >
              {
                /** if the resturant is promoted then add a promoted label to it */
                restaurant.info.isOpen ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              }
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
