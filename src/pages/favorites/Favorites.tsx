import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  getFavoriteMovies,
} from "../../store/reducers/MovieSlice";
import { useLocation } from "react-router";

const Favorites: React.FC = () => {
  const { pathname } = useLocation();
  const favoriteMovies = useSelector(getFavoriteMovies);
  const dispatch = useDispatch();
  dispatch(changeCategory(pathname));
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <div className="category-text flex justify-between">
              Favorite Movies
            </div>
            {favoriteMovies.length > 0 ? (
              <Card movies={favoriteMovies} />
            ) : (
              <p>No favorite movies :(</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Favorites;
