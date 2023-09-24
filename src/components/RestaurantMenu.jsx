import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestuarantMenu();
  }, []);

  const fetchRestuarantMenu = async () => {
    const resMenuData = await fetch(MENU_API_URL + resId);
    const json = await resMenuData.json();
    setRestaurantMenuInfo(json.data);
  };

  if (restaurantMenuInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantMenuInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantMenuInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
      .card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
