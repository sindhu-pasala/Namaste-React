import { useState, useEffect } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [restaurantList,setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [searchText,setSearchText] = useState([])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json()
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(restaurantList)
  }
  useEffect(() =>{
    fetchData()
  },[])
  
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return (<h1>You're offline, please check your internet connection</h1>)
  
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard)
  return (
      <div className="body">
        <div className="filter">
          <div className="search p-3">
            <input placeholder="Search Restaurants" className="border border-solid border-black" type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value)}}></input>
            <button className="px-4 bg-green-100 m-4 rounded-lg" onClick={() => {
              setFilteredRestaurantList(restaurantList.filter((val) =>
                val.info.name.toLowerCase().includes(searchText.toLowerCase())
              ))
              // console.log(filteredRestaurantLists)
            }}>Search</button>
          </div>
        </div>
        <div className="res-container flex flex-wrap gap-8">
          {filteredRestaurantList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id}>
              {restaurant.info.avgRating > 4.5 ? (<PromotedRestaurantCard resData={restaurant.info}/>) : (<RestaurantCard resData={restaurant.info}/>)}
            </Link> 
          ))}
        </div>
      </div>
    );
  }

export default Body;