import React from "react";
import "../../scss/component/card.scss";
import { FaUserAlt, FaCalendar, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";

const CardList = (props) => {
  const { data, dob, showModal, showLightBox, setUserId, phone } = props;

  return (
    <div className="card">
      <div className="header-section">
        <div className="img-box">
          <img
            src={data.picture.thumbnail}
            alt="Avatar"
            onClick={() => {
              setUserId(data.login.username);
              showLightBox();
            }}
          />
        </div>
        <button
          className="name-section"
          onClick={() => {
            setUserId(data.login.username);
            showModal();
          }}
        >
          {` ${data.name.title} ${data.name.first}
                      ${data.name.last}`}
        </button>
      </div>
      <div className="container">
        <ul>
          <li>
            <FaUserAlt />${data.login.username}
          </li>
          <li>
            <a href={`mailto:${data.email}`}>
              <GrMail /> {data.email}
            </a>
          </li>
          <li>
            <FaCalendar /> {dob}
          </li>
          <li>
            <a href={`tel:${phone}`}>
              <FaPhoneAlt /> {phone}
            </a>
          </li>
          <li>
            <HiLocationMarker />
            {` ${data.location.street.number}
                      ${data.location.street.name} ${data.location.city} ${data.location.country} ${data.location.postcode}`}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CardList;
