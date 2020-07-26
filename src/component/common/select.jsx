import React from "react";

const Select = ({ label, name, options }) => {
  console.log(options);
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <select className="form-control mb-3" id="inputGroupSelect01">
        {options.map((option) => (
          <option key={option._id} defaultValue>
            {option.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Select;
