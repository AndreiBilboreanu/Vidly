import React from "react";

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        {...rest}
        name={name}
        id={name}
        className="form-control"
        rows="4"
        cols="50"
      ></textarea>
      {error && <div className="alert form-validation">{error}</div>}
    </div>
  );
};

export default Textarea;
