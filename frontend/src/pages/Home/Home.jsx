import React, { useContext, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Home = () => {
  const [category, setCategory] = useState("All");
  const {searchFood, setSearchFood} = useContext(StoreContext)
  return (
    <div>
      <div className="home-searchbar-container">
        <input
          type="text"
          placeholder="Search for food"
          onChange={(event) => setSearchFood(event.target.value)}
          value={searchFood}
        />
        <img src={assets.search_icon} alt="" className="" />
      </div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
