import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenuInfo = useRestaurantMenu(resId);

  if (restaurantMenuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenuInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantMenuInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
      .card;

  return (
    <div className="text-center font-sans text-xl">
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
