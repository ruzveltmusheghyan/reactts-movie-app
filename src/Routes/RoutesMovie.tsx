import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { list } from "./list";
import { nanoid } from "nanoid";
const RoutesMovie: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {list.map((link) => {
          return (
            <Route
              key={nanoid()}
              path={link.path}
              element={<link.element />}
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMovie;
