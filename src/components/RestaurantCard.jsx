import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="w-96 min-h-full bg-slate-400 border-cyan-400 rounded font-sans cursor-pointer shadow-gray-300 text-center"
    >
      <img
        alt="res-logo"
        className="w-full object-fill h-96"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h5>{resData.info.name}</h5>
      <h6>{resData.info.cuisines.join(", ")}</h6>
      <h6>{resData.info.costForTwo}</h6>
      <h6>{resData.info.sla.deliveryTime} Min</h6>
      <h6>{resData.info.avgRating} ⭐⭐⭐⭐</h6>
      <h6>User: {loggedInUser}</h6>
    </div>
  );
};

// Higher Order Component

// Input - RestaurantCard ====> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" bg-orange-600 text-white p-3 rounded  text-center  absolute mt-auto">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
