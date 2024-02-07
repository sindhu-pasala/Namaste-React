import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="p-2 border-b flex justify-between items-center">
      <div className="w-9/12">
        <p>
          {data.card.info.name} - ₹{data.card.info.price / 100}
        </p>
        <p className="text-xs mt-1">{data.card.info.description}</p>
      </div>
      <div className="w-3/12 p-4">
        <div className="absolute">
          <button
            onClick={() => handleClick(data.card.info.name)}
            className="border bg-black text-white text-xs rounded-md mx-8 mt-14 p-2 shadow-lg"
          >
            +Add
          </button>
        </div>
        <img
          className="w-24 h-20 rounded-lg"
          src={CDN_URL + data.card.info.imageId}
        />
      </div>
    </div>
  );
};

export default ItemList;
