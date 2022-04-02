import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/redux";
import { useLocation, useParams } from "react-router";
import { fetchSearch } from "../../store/reducers/ActionCreators";
import { useNavigate } from "react-router";
import { useRef } from "react";
const Search = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  function handleQuery(text: string) {
    window.addEventListener("keyup", () => {
      fetch(text);
    });
  }
  const searchRef = useRef<HTMLInputElement>(null);
  let id: ReturnType<typeof setTimeout>;
  function fetch(text: string) {
    if (id !== undefined) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      if (pathname === "/search") {
        dispatch(fetchSearch(text));
        text = text;
      } else {
        navigate(`search`);
        text = text;
        dispatch(fetchSearch(text));
      }
    }, 400);
  }

  return (
    <div className="search__input flex justify-center align-center">
      <input
        onChange={(e) => handleQuery(e.target.value)}
        type=""
        placeholder="Search..."
        ref={searchRef}
      />
      <AiOutlineSearch className="search__icon" size={20} />
    </div>
  );
};

export default Search;
