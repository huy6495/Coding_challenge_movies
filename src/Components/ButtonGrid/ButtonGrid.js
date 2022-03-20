import React from "react";
import { useDispatch } from "react-redux";
import "./_buttonGrid.scss";

export default function ButtonGrid() {
  const dispatch = useDispatch();

  const handleGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  return (
    <div id="movies" className="d-flex justify-content-center btn-grid mb-3">
      <label className="toggle" htmlFor="uniqueID">
        <input
          type="checkbox"
          className="toggle__input"
          id="uniqueID"
          onClick={handleGridView}
        />
        <span className="toggle-track">
          <span className="toggle-indicator"></span>
        </span>
        More detail grid view
      </label>
    </div>
  );
}
