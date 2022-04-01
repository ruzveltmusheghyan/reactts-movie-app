import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/redux";
import { SingleMovie } from "../../models/movieModel";
import { fetchSearch } from "../../store/reducers/ActionCreators";
import { useNavigate } from "react-router";
const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function handleQuery(text: string) {
    window.addEventListener("keyup", () => {
      fetch(text);
    });
  }
  let id: ReturnType<typeof setTimeout>;
  function fetch(text: string) {
    if (id !== undefined) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      dispatch(fetchSearch(text));
    }, 400);
  }

  return (
    <div className="search__input flex justify-center align-center">
      <input
        onChange={(e) => handleQuery(e.target.value)}
        type=""
        placeholder="Search..."
      />
      <AiOutlineSearch className="search__icon" size={20} />
    </div>
  );
};

export default Search;
