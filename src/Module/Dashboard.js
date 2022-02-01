import React, { useEffect, useState, useContext } from "react";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Card from "../Components/Card/Card";
import "../scss/module/dashboard.scss";

export const AppContext = React.createContext();
function Dashboard() {
  const [data, setdata] = useState();

  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const searchData = (event) => {
    setQuery(event);
  };
  return (
    <AppContext.Provider value={data}>
      <Header />
      <div className="main-container">
        <Search searchData={searchData} />
        <div className="card-section">
          <Card data={data} query={query} />
        </div>
      </div>
    </AppContext.Provider>
  );
}
export default Dashboard;
