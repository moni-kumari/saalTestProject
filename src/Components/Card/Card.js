import React, { useState } from "react";
import "../../scss/component/card.scss";
import Modal from "../Modal/Modal";
import LightBox from "../../Components/LightBox/LightBox";
import Pagination from "../Pagination/Pagination";
import CardList from "./CardList";

const Card = (props) => {
  const { data, query, setPage } = props;
  const [userId, setUserId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [openLightBox, setOpenLightBox] = useState(false);

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

  return (
    <>
      {data &&
        data.results
          .filter((empList) => {
            const data = empList.login.username.toLowerCase();
            // console.log(">>>>>>>>>>>>", empList);
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

      <Pagination setPage={setPage} data={data} />
      {modalOpen && <Modal closeModal={closeModal} userId={userId} />}
      {openLightBox && <LightBox closeModal={closeModal} userId={userId} />}
    </>
  );
};
export default Card;
