import React from "react";
import "../../scss/component/search.scss";

const Search = (props) => {
  const { searchData } = props;
  return (
    <div className="search-field">
      <form>
        <div>
          <input
            placeholder="Search by username"
            onChange={(event) => searchData(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
