import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // This is the base URL for the backend server.
  const url = "https://food-delivery-backend-yczg.onrender.com";

  // stores item id as property and no of items as value.
  const [cartItems, setCartItems] = useState({});

  // stores token for authentication.
  const [token, setToken] = useState("");

  const [food_list, setFoodList] = useState([]);

  const [searchFood, setSearchFood] = useState("");

  // adding no of items to cart.
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token){
      await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
    }
  };

  // removing no of items from cart.
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}});
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.get(url+"/api/cart/get", {headers: {token}});
    setCartItems(response.data.cartData)
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  // This useEffect is mainly used for restoring the login state after a page reload
  // so the user doesn’t get logged out unnecessarily.
  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    };
    loadData();
  }, []);

  // context value to be passed to the provider
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    setToken,
    token,
    searchFood,
    setSearchFood
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
