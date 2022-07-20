import React, { useState, useContext } from "react";
import "../../scss/component/card.scss";
import Modal from "../Modal/Modal";
import LightBox from "../../Components/LightBox/LightBox";
import Pagination from "../Pagination/Pagination";
import CardList from "./CardList";
import { AppContext } from "../../App";

const Card = (props) => {
  const { query, setPage, page } = props;
  const [userId, setUserId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [openLightBox, setOpenLightBox] = useState(false);

  const data = useContext(AppContext);

  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setOpenLightBox(false);
  };
  const showLightBox = () => {
    setOpenLightBox(true);
  };

  console.log(data);

  return (
    <>
      {data &&
        data.results
          .filter((userList) => {
            const data = userList.login.username.toLowerCase();
            if (query === "") {
              return true;
            } else if (data.toLowerCase().includes(query)) {
              return true;
            }
            return false;
          })
          .map((list, key) => {
            let dobNew = new Date(list.dob.date);
            let dob = Intl.DateTimeFormat(["ban", "id"]).format(dobNew);
            let phone = list.phone.split("-").join("");
            return (
              <CardList
                key={key}
                data={list}
                dob={dob}
                showModal={showModal}
                showLightBox={showLightBox}
                setUserId={setUserId}
                phone={phone}
              />
            );
          })}

      <Pagination setPage={setPage} page={page} />
      {modalOpen && <Modal closeModal={closeModal} userId={userId} />}
      {openLightBox && <LightBox closeModal={closeModal} userId={userId} />}
    </>
  );
};
export default Card;
