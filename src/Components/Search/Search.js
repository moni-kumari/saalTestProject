import React,{useContext} from "react";
import "../../scss/component/search.scss";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../context/themeContext";
import { lightMode } from "../../theme/styledTheme";

const Search = (props) => {
  const { searchData, disableSearchIcon } = props;
 //const {theme, setTheme} = useContext(ThemeContext)
 const { theme, setTheme } = useContext(ThemeContext);

 const changeTheme =()=>{
   if(theme === "light"){
    return setTheme("dark")
    }
  return setTheme('light')
  }

  console.log("theeeeeee>>>>", theme);
  return (
    <div className="search-field">
      <button onClick={changeTheme}>change mode</button>
      <input
        placeholder="Search by username"
        onChange={(event) => searchData(event.target.value)}
      />
      {disableSearchIcon ? "" : <FaSearch />}
    </div>
  );
};
export default Search;
