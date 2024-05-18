import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const [restroMenu,setRestroMenu] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data= await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
       // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]);//data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        setRestroMenu(json?.data)
    }
  
    if(restroMenu === null){
        return <Shimmer/>
    }

   const itemList=restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (
        <div>
            <h1>{restroMenu.cards[0].card.card.text}</h1>
            <div>
                {
                  itemList.map((item)=>(
                <ol key={item.card.info.id}>
                    <ul>{item.card.info.name}</ul>
                    <ul>{item.card.info.description}</ul>
                    <ul>{"Rs." + item?.card?.info?.price/100}</ul>
                </ol>
                  ))
                }
            </div>
        </div>
    )
}

export default RestaurantMenu