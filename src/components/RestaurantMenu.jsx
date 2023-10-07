import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenuInfo = useRestaurantMenu(resId);

  if (restaurantMenuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenuInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantMenuInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
      .card;

  const categories =
    restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    // <div className="text-center font-sans text-xl">
    //   <h1>{name}</h1>
    //   <h2>{cuisines.join(", ")}</h2>
    //   <h2>{costForTwoMessage}</h2>
    //   <ul>
    //     {itemCards.map((item) => (
    //       <li key={item.card.info.id}>
    //         {item.card.info.name} - {" Rs. "}{" "}
    //         {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className=" font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions*/}
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
