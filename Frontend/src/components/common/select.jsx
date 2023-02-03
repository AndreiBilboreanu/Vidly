import React from "react";
import "../../css/movie.css"
const Select = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <select
      className="form-select filterBar genreSelect"
      onChange={(e) => onItemSelect(e.target.value)}
      aria-label="Default select example"
    >
      {items.map((item) => (
        <option key={item[valueProperty]} value={item[textProperty]}>
          {item[textProperty]}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Select;
