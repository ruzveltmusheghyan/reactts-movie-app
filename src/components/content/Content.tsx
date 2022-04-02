import Card from "../card/Card";
import Search from "../search/Search";
const Content: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div>
          <div className="title__search flex justify-between">
            <div className="category-text">Movies</div>
            <Search />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
