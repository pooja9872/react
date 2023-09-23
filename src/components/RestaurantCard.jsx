import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="food-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h5>{resData.info.name}</h5>
      <h6>{resData.info.cuisines.join(", ")}</h6>
      <h6>{resData.info.costForTwo}</h6>
      <h6>{resData.info.sla.deliveryTime} Min</h6>
      <h6>{resData.info.avgRating} ⭐⭐⭐⭐</h6>
    </div>
  );
};

export default RestaurantCard;
