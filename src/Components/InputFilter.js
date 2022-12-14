import React from "react";

const InputFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <p>
        Type to filter the list:
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value.toLowerCase())}
        />
      </p>
    </div>
  );
};

export default InputFilter;
