import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
 import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = "https://food-delivery-backend-yczg.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add url={url} />}  />
          <Route path="/list" element={<List url={url} />}  />
          <Route path="/orders" element={<Orders url={url} />}  />
        </Routes>
      </div>
    </div>
  );
};

export default App;
