import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/redux";
import { useLocation, useParams } from "react-router";
import { fetchSearch } from "../../store/reducers/ActionCreators";
import { useNavigate } from "react-router";
import { useRef, useTransition, useState, useEffect } from "react";
const Search = () => {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.trim().length === 0) {
      navigate("/trending");
    } else {
      startTransition(() => {
        navigate("/search");
        dispatch(fetchSearch(searchValue));
      });
    }
  }, [searchValue]);

  return (
    <div className="search__input flex justify-center align-center">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type=""
        placeholder="Search..."
      />
      <AiOutlineSearch className="search__icon" size={20} />
    </div>
  );
};

export default Search;
