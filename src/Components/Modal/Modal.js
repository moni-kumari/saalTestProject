import React, { useContext } from "react";
import "../../scss/component/modal.scss";
import { AppContext } from "../../Module/Dashboard";

const Modal = (props) => {
  const { closeModal, userId } = props;
  const empDetail = useContext(AppContext);
  let filteredData = {};

  filteredData = empDetail.results.filter((data) => {
    if (data.login.username == userId) {
      return data;
    }
  });
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => closeModal(filteredData[0].login.username)}
            >
              X
            </span>
            <ul>
              <li>
                <b>Gender: {filteredData[0].gender} </b>

                <li>
                  <b>Email:{filteredData[0].email} </b>
                </li>

                <li>
                  <b>Phone: {filteredData[0].phone}</b>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
