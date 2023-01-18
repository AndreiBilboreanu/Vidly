import React from "react";

const CustomInput = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} className="form-control" id={name} name={name}>
        <option value="none"></option>
        {options.map((op) => (
          <option id={op._id} value={op._id}>
            {op.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default CustomInput;
