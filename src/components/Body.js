import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import {restList} from "../utils/restaurants";

const Body =()=>{

   const [listOfResto,setListOfResto] = useState(restList);

    return (
        <div className="body">
            <button className="filterBtn" 
                onClick={()=>{
                const filterList = listOfResto.filter(
                    (rest)=>rest.info.avgRating > 4.3
                );
                console.log(filterList);
                setListOfResto(filterList);
            }}
            >Filter
            </button>
            <div className="res-container">
                   { 
                   listOfResto.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
                   )

                   )
                   }
                </div>
        </div>
    );
};
export default Body;