import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

const Favorites = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <div className="category-text flex justify-between">
              Favorite Movies
            </div>
            <Card />
          </div>
          <div>
            <div className="category-text flex justify-between">
              Favorite Tv
            </div>
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Favorites;
