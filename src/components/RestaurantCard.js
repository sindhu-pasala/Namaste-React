import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
      } = resData;
    return (
      <div className="res-card m-1 p-1 w-52 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-transparent">
        <img className="res-img h-56 w-full p-4 rounded-lg" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo}</h4>
      </div>
    );
  }

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="bg-black text-white p-2 m-2 absolute">Popular</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;