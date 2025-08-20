import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [currentQuote, setCurrentQuote] = useState(0);
  const [chefMood, setChefMood] = useState(0);
  const [foodPun, setFoodPun] = useState(0);
  const [cookingTip, setCookingTip] = useState(0);

  const foodQuotes = [
    "I'm on a seafood diet... I see food and I eat it! 🍕",
    "My favorite exercise is a cross between a lunge and a crunch... I call it lunch! 🍔",
    "I'm just a girl, standing in front of a salad, asking it to be a donut! 🍩",
    "You can't buy happiness, but you can buy pizza and that's kind of the same thing! 🍕",
    "I'm sorry for what I said when I was hungry! 🍟",
    "Life is short, make it sweet... with extra cheese! 🧀",
    "I followed my heart and it led me to the fridge! 🥪",
    "My head says gym, but my heart says tacos! 🌮",
    "I'm not lazy, I'm just on energy-saving mode until lunch! 🍝",
    "Dear diet, things just aren't working out between us... it's not me, it's food! 🍰"
  ];

  const chefMoods = [
    { emoji: "🥵", text: "Spicy mode activated!" },
    { emoji: "😋", text: "Delicious vibes only!" },
    { emoji: "🥶", text: "Frozen treats incoming!" },
    { emoji: "🔥", text: "Kitchen's on fire!" },
    { emoji: "😍", text: "Food coma incoming!" },
    { emoji: "🤤", text: "Drooling over here!" }
  ];

  const foodPuns = [
    "Lettuce turnip the beet! 🥬",
    "You bake me crazy! 🧁",
    "I love you from my head tomatoes! 🍅",
    "You're the apple of my pie! 🥧",
    "Olive you so much! 🫒",
    "You're bacon me smile! 🥓",
    "Donut worry, be happy! 🍩",
    "You're my butter half! 🧈"
  ];

  const cookingTips = [
    "Always salt pasta water like the sea 🌊",
    "Let meat rest after cooking - patience pays! 🥩",
    "Fresh herbs > dried herbs (except oregano) 🌿",
    "Taste as you go - your tongue is your best tool 👅",
    "Room temp eggs mix better for baking! 🥚",
    "Don't overcrowd the pan - give food space! 🍳",
    "Sharp knives are safer than dull ones! 🔪",
    "Toast your spices for extra flavor! 🌶️"
  ];

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % foodQuotes.length);
      setChefMood((prev) => (prev + 1) % chefMoods.length);
      setFoodPun((prev) => (prev + 1) % foodPuns.length);
      setCookingTip((prev) => (prev + 1) % cookingTips.length);
    }, 8000);// 24 hours
    
    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <div className="admin-home">
      <div className="admin-container">
        <div className="admin-header">
          <div className="admin-left">
            <h1 className="admin-title">Hello Admin</h1>
          </div>
          <div className="admin-right">
            <div className="date">{dateTime.toLocaleDateString()}</div>
            <div className="time">{dateTime.toLocaleTimeString()}</div>
          </div>
        </div>
        
        <div className="admin-content">
          <div className="fun-section">
            
            <div className="chef-mood">
              <span className="mood-emoji">{chefMoods[chefMood].emoji}</span>
              <span className="mood-text">{chefMoods[chefMood].text}</span>
            </div>
            
            <div className="admin-quote">
              <span className="quote-icon">"</span>
              {foodQuotes[currentQuote]}
              <span className="quote-icon">"</span>
            </div>
            
            <div className="food-pun">
              <span className="pun-label">Food Pun:</span>
              <span className="pun-text">{foodPuns[foodPun]}</span>
            </div>
            
            <div className="cooking-tip">
              <span className="tip-label">Quick Tip:</span>
              <span className="tip-text">{cookingTips[cookingTip]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
