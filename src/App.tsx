import React from "react";
import Home from "./pages/home/Home";
import SingleMovie from "./pages/singleMovie/Movie";
import Favorites from "./pages/favorites/Favorites";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoutesMovie from "./Routes/RoutesMovie";
const App: React.FC = () => {
  return (
    <div className="product-wrapper">
      <RoutesMovie />
    </div>
  );
};

export default App;
