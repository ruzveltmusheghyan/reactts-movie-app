import React from "react";
import Home from "./pages/home/Home";
import SingleMovie from "./pages/singleMovie/Movie";
import Favorites from "./pages/favorites/Favorites";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className="product-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:category/:id" element={<SingleMovie />}></Route>
          <Route path="top_rated" element={<Home />}></Route>
          <Route path="trending" element={<Home />}></Route>
          <Route path="upcoming" element={<Home />}></Route>
          <Route path="favorite" element={<Favorites />}></Route>
          <Route path="search" element={<Home />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
