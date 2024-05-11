import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restList } from "../utils/restaurants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [searchText,setSearchText] = useState("");

  const [filterOfResto, setFilterOfResto] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(data);
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfResto(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterOfResto(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
  };


  return listOfResto.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
               const filteredData = listOfResto.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setFilterOfResto(filteredData);
            }}>search</button>
        </div>
        <button
          className="filterBtn"
          onClick={() => {
            const filterList = listOfResto.filter(
              (rest) => rest.info.avgRating > 4.5
            );
            console.log(filterList);
            setFilterOfResto(filterList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {filterOfResto.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
