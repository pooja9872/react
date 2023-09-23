import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="food-img"
        src={ CDN_URL + resData.cloudinaryImageId
        }
      />
      <h5>{resData.name}</h5>
      <h6>{resData.cuisines.join(", ")}</h6>
      <h6>{resData.costForTwo}</h6>
      <h6>{resData.deliveryTime} Min</h6>
      <h6>{resData.avgRating} ⭐⭐⭐⭐</h6>
    </div>
  );
};

export default RestaurantCard;