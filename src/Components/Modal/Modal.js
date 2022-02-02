import React, { useContext } from "react";
import "../../scss/component/modal.scss";
import { AppContext } from "../../Module/Dashboard";
import { FaTransgender, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Modal = (props) => {
  const { closeModal, userId } = props;
  const empDetail = useContext(AppContext);
  let filteredData = {};

  filteredData = empDetail.results.filter((data) => {
    if (data.login.username == userId) {
      return data;
    }
  });
  let phone = filteredData[0].phone.split("-").join("");
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <h3>Employee Details</h3>
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => closeModal(filteredData[0].login.username)}
            >
              X
            </span>
            <div className="emp-picture">
              <img src={filteredData[0].picture.large} alt="Avatar" />
            </div>
            <ul>
              <li>
                <FaTransgender />
                {filteredData[0].gender}
              </li>
              <li>
                <GrMail />
                {filteredData[0].email}
              </li>

              <li>
                <FaPhoneAlt />
                {phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
