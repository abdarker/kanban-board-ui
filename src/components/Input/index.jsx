import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="form">
      <form>
        <label>
          <input
            placeholder="Write your task ..."
            style={{ width: "300px" }}
            type="text"
            name="name"
          />
        </label>
        <button type="submit" value="Submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
