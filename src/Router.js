import { Routes, Route } from "react-router-dom";
import Dashboard from "./Module/Dashboard";
import NewDataList from "./Components/NewDataList/NewDataList";
import TabList from "./Components/TabList/TabList";
// import Login from "./Module/Login";

function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} exact></Route> */}
      <Route path="/" element={<Dashboard />} exact></Route>
      <Route path="/newDataList" element={<NewDataList />} exact></Route>
      <Route path="/tabList" element={<TabList />} exact></Route>
    </Routes>
  );
}

export default Router;
