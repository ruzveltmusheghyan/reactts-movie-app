import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { list } from "./list";
import { useId } from "react";
const RoutesMovie: React.FC = () => {
  const id = useId();
  return (
    <BrowserRouter>
      <Routes>
        {list.map((link) => {
          return (
            <Route key={id} path={link.path} element={<link.element />}></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMovie;
