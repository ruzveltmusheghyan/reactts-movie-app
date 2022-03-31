import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  return (
    <div className="search__input flex justify-center align-center">
      <input type="" placeholder="Search..." />
      <AiOutlineSearch className="search__icon" size={20} />
    </div>
  );
}

export default Search;
