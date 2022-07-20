import React, { useContext, useState } from "react";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Card from "../Components/Card/Card";
import "../scss/module/dashboard.scss";
import { Link } from "react-router-dom";
import {PageContext} from '../App'

function Dashboard(props) {
  const { logout } = props;
  const [query, setQuery] = useState("");
  const [disableSearchIcon, setDisableSearchIcon] = useState();
  const {value} = useContext(PageContext);
  const [page, setPage]=value;
 console.log("page", page);
  const searchData = (event) => {
    var nameReg = /^[A-Za-z]*$/;
    if (!nameReg.test(event)) {
      return false;
    } else {
      setQuery(event);
    }
    setDisableSearchIcon(event);
  };
  return (
    <div>
      <Link to="/newDataList">Go to next page</Link>
      <Link to="/tabList">Go to tab list</Link>
      <button onClick={logout}>Logout</button>
      <Header />
      <div className="main-container">
        <Search searchData={searchData} disableSearchIcon={disableSearchIcon} />
        <div className="card-section">
          <Card query={query} setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
