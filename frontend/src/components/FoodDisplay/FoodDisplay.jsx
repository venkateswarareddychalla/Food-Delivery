import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { assets } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  const { food_list, searchFood } = useContext(StoreContext);
  const filteredSearchData = food_list.filter((item) =>
    item.name.toLowerCase().includes(searchFood.toLowerCase())
  );
  return (
    <>
      {food_list.length === 0 ? (
        <div>
          <div className="empty-food-list">
            <h2>Menu is being prepared...</h2>
            <img src={assets.empty_menu} alt="" />
            <p>We appreciate your patience!</p>
          </div>
          <div className="empty-food-list-hr"></div>
        </div>
      ) : (
        <div>
          {filteredSearchData.length === 0 ? (
            <div>
              <div className="empty-search-list">
                <img src={assets.empty_search} alt="" />
                <p>No results found...</p>
                <h2>Explore with another search!</h2>
              </div>
              <div className="empty-search-list-hr"></div>
            </div>
          ) : (
            <div className="food-display" id="food-display">
              <h2>Top dishes near you</h2>
              <div className="food-display-list">
                {filteredSearchData.map((item, index) => {
                  if (category === "All" || category === item.category) {
                    return (
                      <FoodItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                      />
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FoodDisplay;
