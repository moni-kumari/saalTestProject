import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import BASE_URL from "./config/index";
import ThemeContext from './context/themeContext'
import Routes from "./Router";
export const AppContext = React.createContext();
export const PageContext = React.createContext();
function App() {
  const [data, setdata] = useState();
  const [page, setPage] = useState(1);
  //const [theme, setTheme]= useState('light')
  useEffect(() => {
    const url = `${BASE_URL}?page=${page}&results=10&seed=abc`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [page]);
  return (
    // <ThemeContext.Provider value={{theme, setTheme}}>
    <ThemeContext>
    <AppContext.Provider value={data}>
      <PageContext.Provider value={{value:[page, setPage]}}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </PageContext.Provider>
    </AppContext.Provider>
    </ThemeContext>
  );
}
export default App;
