import React from "react";
import "../../scss/component/search.scss";
import { FaSearch } from "react-icons/fa";

const Search = (props) => {
  const { searchData, disableSearchIcon } = props;

  return (
    <div className="search-field">
      <input
        placeholder="Search by username"
        onChange={(event) => searchData(event.target.value)}
      />
      {disableSearchIcon ? "" : <FaSearch />}
    </div>
  );
};
export default Search;
