import React from "react";
import "../../scss/component/pagination.scss";

const Pagination = (props) => {
  const { setPage, data } = props;
  const goPrevious = () => {
    setPage((pre) => {
      if (pre <= 1) {
        return pre;
      }
      return pre - 1;
    });
  };
  const goNext = () => {
    setPage((pre) => {
      return pre + 1;
    });
  };
  return (
    <div className="pagination">
      <ul>
        <li onClick={goPrevious}>&laquo; Previous </li>
        <li onClick={goNext}> Next &raquo;</li>
      </ul>
    </div>
  );
};

export default Pagination;
