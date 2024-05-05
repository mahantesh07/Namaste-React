import IMG_URL from "../utils/constants";

const RestaurantCard = (props) =>{
    const {restData}  =props;
    const {name,areaName,costForTwo,cuisines,avgRating,cloudinaryImageId}  =restData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
        className="res-logo"
        alt="res-logo" src=
        { IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
        </div>
    );
};

export default RestaurantCard;