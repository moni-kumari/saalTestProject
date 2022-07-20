import React, { useEffect, useState } from "react";
import BASE_URL from "../../config/index";


const NewDataList = () => {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const url = `${BASE_URL}?results=20`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  let textInput = React.createRef();

  const getInputValue = () => {
    setSearchData(textInput.current.value);
  };
  const tableData =
    data &&
    data.results
      .filter((dataFilter) => {
        let userData = dataFilter.login.username.toLowerCase();
        if (searchData === "") {
          return true;
        } else if (userData.includes(searchData)) {
          return true;
        }
        return false;
      })
      .map((dataList) => {
        let dobNew = new Date(dataList.dob.date);
        let dob = Intl.DateTimeFormat(["ban", "id"]).format(dobNew);
        let phone = dataList.phone.split("-").join("");
        let regDate = new Date(dataList.registered.date);
        let registeredDate = Intl.DateTimeFormat(["ban", "id"]).format(regDate);
        return (
          <tr>
            <td>
              <img src={dataList.picture.thumbnail} alt="thumb" />
            </td>
            <td>
              {dataList.name.title} {dataList.name.first} {dataList.name.last}
            </td>
            <td>{dataList.gender}</td>
            <td>{dataList.login.username}</td>
            <td>{dataList.email}</td>
            <td>{dob}</td>
            <td>{dataList.dob.age}</td>
            <td>
              {dataList.location.street.number} {dataList.location.street.name}
              {dataList.location.city}
              {dataList.location.country}
              {dataList.location.postcode}
            </td>
            <td>{phone}</td>
            <td>{registeredDate}</td>
          </tr>
        );
      });

  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      <div className="search-field">
        <input
          placeholder="Search by username"
          style={{ width: "calc(100% - 80px)" }}
          ref={textInput}
        />
        <button
          style={{
            float: "right",
            background: "green",
            color: "#fff",
            padding: "13px",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={getInputValue}
        >
          Search
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Email</th>
            <th>Dob</th>
            <th>Age</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Registered Date</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default NewDataList;
