/* eslint-disable no-unused-expressions */
import React from "react";
const Filter = (props) => {
  const {
    values,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedGenre,
  } = props;
  return (
    <ul className="list-group">
      {values.map((value) => (
        <li
          style={{ cursor: "pointer" }}
          className={
            selectedGenre === value
              ? "list-group-item active"
              : "list-group-item"
          }
          key={value[valueProperty]}
          onClick={() => onItemSelect(value)}
        >
          {value[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Filter.defaultProps = {
  textProperty: "name",
  value: "_id",
};

export default Filter;
