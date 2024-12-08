import styles from './SearchBox.module.css'
import {Autocomplete, TextField} from "@mui/material";
import recipes from "../../../utils/recipes.js";
import {useNavigate} from "react-router";

const SearchBox = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.searchBox}>
      <Autocomplete
        id = "search"
        freeSolo
        options={recipes.map((item) => item.name)}
        renderInput={(params) => <TextField {...params} label="Search Recipes" />}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.defaultMuiPrevented = true;
            const searchURL = `/search/${encodeURIComponent(e.target.value.toLowerCase())}`;
            navigate(searchURL);
          }
        }}
      />
    </div>
  );
};

export default SearchBox;