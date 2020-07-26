import React from "react";

const Select = ({ label, name, options, onChange, error }) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <select
        name={name}
        className="form-control mb-3"
        id="inputGroupSelect01"
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </React.Fragment>
  );
};

export default Select;
