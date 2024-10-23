import React, { useState } from "react";
import "./index.css";

export default function Dropdown({ options, labelText, onChange }) {
  const [selectedOption, setSelectedOption] = useState(labelText);

  const optionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e);
  };

  return (
    <div className="elementSet">
      <select 
        onChange={optionChange} 
        value={selectedOption}
      >
        <option value={labelText} disabled selected>{labelText}</option>
        {
          options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))
        }
      </select>
    </div>
  );
}
