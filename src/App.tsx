import React from "react";
import Home from "./pages/home/Home";
import Movie from "./pages/singleMovie/SingleMovie";
import Catalog from "./pages/catalog/Catalog";
import Favorites from "./pages/favorites/Favorites";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <div className="product-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":category/:id" element={<Movie />}></Route>
          <Route path="top_rated" element={<Home />}></Route>
          <Route path="trending" element={<Home />}></Route>
          <Route path="upcoming" element={<Home />}></Route>
          <Route path="/:category" element={<Catalog />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
