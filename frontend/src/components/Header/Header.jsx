import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
            Order your favorite food here 
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, delectus mollitia
             vitae porro minima accusantium ab nesciunt natus tempore inventore.</p>
        <a href="#explore-menu"><button >View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
