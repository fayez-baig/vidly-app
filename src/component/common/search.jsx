import React from "react";

const Search = ({ name, value, onChange }) => {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      type="text"
      className="form-control"
    />
  );
};

export default Search;
