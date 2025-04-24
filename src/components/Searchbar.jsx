// Searchbar.jsx
import React from "react";

const Searchbar = ({ inputVal, handleInput }) => {
  return (
    <div className="form-control w-full max-w-md mx-auto my-4">
      <div className="input-group">
        <input
          type="text"
          value={inputVal}
          onChange={handleInput}
          placeholder="Search retailers..."
          className="input input-bordered w-full focus:outline-primary focus:border-primary"
        />
      </div>
    </div>
  );
};

export default Searchbar;
