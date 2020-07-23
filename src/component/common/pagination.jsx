/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import propTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return "";
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((p) => (
          // eslint-disable-next-line no-unused-expressions
          <li
            className={p === currentPage ? "page-item active" : "page-item "}
            key={p}
            onClick={() => onPageChange(p)}
          >
            <a className="page-link">{p}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

Pagination.propTypes = {
  itemCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};
