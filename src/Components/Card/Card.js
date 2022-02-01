import React, { useState } from "react";
import "../../scss/component/card.scss";
import Modal from "../Modal/Modal";

const Card = (props) => {
  const { data, query } = props;
  const [userId, setUserId] = useState("");
  const [modalOpen, serModalOpen] = useState(false);

  const showModal = (id) => {
    console.log(userId);
    if (id == userId) {
      serModalOpen(true);
    }
  };
  const closeModal = (id) => {
    if (id == userId) {
      serModalOpen(false);
    }
  };
  return (
    <>
      {data &&
        data.results
          .filter((empList) => {
            const data = empList.login.username.toLowerCase();
            if (query == "") {
              return "";
            } else if (data.toLowerCase().includes(query)) {
              return empList;
            }
          })
          .map((list, key) => {
            return (
              <>
                <div className="card" key={key}>
                  <div className="img-box">
                    <img src={list.picture.large} alt="Avatar" />
                  </div>
                  <div className="container">
                    <button
                      className="name-section"
                      onClick={() => {
                        setUserId(list.login.username);
                        showModal(list.login.username);
                      }}
                    >
                      {` ${list.name.title} ${list.name.first}
                      ${list.name.last}`}
                    </button>
                    <ul>
                      <li>
                        <b>Username: </b>
                        {` ${list.login.username}`}
                      </li>
                      <li>
                        <b>Dob:</b> {` ${list.dob.date}`}
                      </li>
                      <li>
                        <b>Address:</b>
                        {` ${list.location.street.number}
                      ${list.location.street.name} ${list.location.city} ${list.location.country} ${list.location.postcode}`}
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
      {!query &&
        data &&
        data.results.map((list, key) => {
          return (
            <>
              <div className="card" key={key}>
                <div className="img-box">
                  <img src={list.picture.large} alt="Avatar" />
                </div>
                <div className="container">
                  <button
                    className="name-section"
                    onClick={() => {
                      setUserId(list.login.username);
                      showModal(list.login.username);
                    }}
                  >
                    {` ${list.name.title} ${list.name.first}
                      ${list.name.last}`}
                  </button>
                  <ul>
                    <li>
                      <b>Username: </b>
                      {` ${list.login.username}`}
                    </li>
                    <li>
                      <b>Dob:</b> {` ${list.dob.date}`}
                    </li>
                    <li>
                      <b>Address:</b>
                      {` ${list.location.street.number}
                      ${list.location.street.name} ${list.location.city} ${list.location.country} ${list.location.postcode}`}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      {modalOpen && <Modal closeModal={closeModal} userId={userId} />}
    </>
  );
};
export default Card;
