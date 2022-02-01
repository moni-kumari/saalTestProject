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
                <b>Gender:</b> {filteredData[0].gender}
              </li>
              <li>
                <b>Email:</b>
                {filteredData[0].email}
              </li>

              <li>
                <b>Phone: </b>
                {filteredData[0].phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
