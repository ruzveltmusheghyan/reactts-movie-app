import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/redux";
import { fetchSearch } from "../../store/reducers/ActionCreators";
import { useNavigate } from "react-router";
import { useTransition, useState, useEffect } from "react";
const Search: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim().length === 0) {
      navigate("/trending");
    } else {
      startTransition(() => {
        navigate("/search");
        dispatch(fetchSearch(searchValue));
      });
    }
  };

  return (
    <div className="search__input flex justify-center align-center">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type=""
        placeholder="Search..."
      />
      <AiOutlineSearch
        onClick={() => handleSearch()}
        className="search__icon"
        size={20}
      />
    </div>
  );
};

export default Search;
