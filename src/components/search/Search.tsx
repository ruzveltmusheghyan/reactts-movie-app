import { AiOutlineSearch } from "react-icons/ai";
import { fetchSearch } from "../../store/reducers/ActionCreators";
import { useNavigate } from "react-router";
import { useTransition, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, TextField } from "@mui/material";
const Search: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        size="small"
        placeholder="search..."
      />
      <AiOutlineSearch
        onClick={() => handleSearch()}
        className="search__icon"
        size={25}
      />
    </div>
  );
};

export default Search;
