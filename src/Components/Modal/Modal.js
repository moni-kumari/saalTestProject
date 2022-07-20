import React, { useContext } from "react";
import "../../scss/component/modal.scss";
import { AppContext } from "../../App";
import { FaTransgender, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Modal = (props) => {
  const { closeModal, userId } = props;
  const userDetail = useContext(AppContext);
  let filteredData = {};

  filteredData = userDetail.results.filter((data) => {
    if (data.login.username == userId) {
      return data;
    }
  });
  let phone = filteredData[0].phone.split("-").join("");
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <h3>User Detail</h3>
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => closeModal(filteredData[0].login.username)}
            >
              X
            </span>
            <div className="user-picture">
              <img src={filteredData[0].picture.large} alt="Avatar" />
            </div>
            <ul>
              <li>
                <FaTransgender />
                {filteredData[0].gender}
              </li>
              <li>
                <a href={`mailto ${filteredData[0].email}`}>
                  <GrMail />
                  {filteredData[0].email}
                </a>
              </li>

              <li>
                <a href={`tel:${phone}`}>
                  <FaPhoneAlt />
                  {phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
