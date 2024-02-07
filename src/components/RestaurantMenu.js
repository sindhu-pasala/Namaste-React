import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [active,setActive] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <div></div>;
  }
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
  const itemCards = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards

  return (
    <div className="menu">
      <h1 className="font-bold text-center">{name}</h1>
      <p className="font-bold text-center mb-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCards.map((item,index) => (
         <RestaurantCategory category={item.card.card} isActive={active === index} updateMethod={() => setActive(index)} key={item.name}/>
        ))}
    </div>
  );
};

export default RestaurantMenu;
