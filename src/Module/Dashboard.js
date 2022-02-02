import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Card from "../Components/Card/Card";
import "../scss/module/dashboard.scss";
import BASE_URL from "../config";

export const AppContext = React.createContext();
function Dashboard() {
  const [data, setdata] = useState();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `${BASE_URL}?page=${page}&results=10&seed=abc`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [page]);

  const searchData = (event) => {
    var nameReg = /^[A-Za-z]*$/;
    if (!nameReg.test(event)) {
      return false;
    } else {
      setQuery(event);
    }
  };
  return (
    <AppContext.Provider value={data}>
      <Header />
      <div className="main-container">
        <Search searchData={searchData} />
        <div className="card-section">
          <Card data={data} query={query} setPage={setPage} />
        </div>
      </div>
    </AppContext.Provider>
  );
}
export default Dashboard;
