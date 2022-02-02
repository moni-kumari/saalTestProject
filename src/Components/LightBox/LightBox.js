import React, { useContext } from "react";
import "../../scss/component/modal.scss";
import { AppContext } from "../../Module/Dashboard";

const SlideBox = (props) => {
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
        <div className="light-container">
          <div className="slide-box">
            <span
              className="close-btn"
              onClick={() => closeModal(filteredData[0].login.username)}
            >
              X
            </span>
            <div className="light-box">
              <img src={filteredData[0].picture.large} alt="largImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SlideBox;
