import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // dispatch an action
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className=" text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative ml-4 h-28">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-64 h-24 object-cover rounded-md  border-none"
            />
            <div className="absolute z-10 bottom-2 left-11">
              <button
                onClick={() => handleAddItem(item)}
                className="w-28 h-12 bg-white text-green-500 text-lg rounded shadow-lg"
              >
                Add +{" "}
              </button>
              <button
                onClick={() => handleRemoveItem(item)}
                className="w-28 h-12 bg-white text-green-500 text-lg rounded shadow-lg"
              >
                Remove -{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
