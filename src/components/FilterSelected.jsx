import React, { useState } from "react";
import deleteIcon from "../assets/imgs/del.png";
import RedDeleteIcon from "../assets/imgs/redDel.png";

const FilterSelected = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <div className="d-flex justify-content-center" style={{ margin: "50px" }}>
      <div
        className="d-flex justify-content-between"
        style={{
          width: "1260px",
          borderRadius: "20px",
          padding: "40px",
          border: "1px solid #4EB1A4",
        }}
      >
        <div style={{ gap: "10px" }}>
          {selectedFilters.map((filter) => (
            <div
              style={{
                fontSize: "20px",
                height: "44px",
                minWidth: "130px",
                border: "1px solid #4EB1A4",
                borderRadius: "20px",
                display: "inline-block",
                fontWeight: "bold",
                marginRight: "20px",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-between px-2"
                style={{ height: "100%" }}
              >
                <span>{filter}</span>
                <button style={{ border: "none", background: "none" }}>
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
            </div>
          ))}

          {(selectedFilters.length !== 0 || selectedFilters.length) && (
            <div
              style={{
                fontSize: "20px",
                height: "44px",
                minWidth: "130px",
                display: "inline-block",
                border: "1px solid #4EB1A4",
                borderRadius: "20px",
                color: "#AF463F",
                fontWeight: "bold",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-between px-2"
                style={{ height: "100%" }}
              >
                <span>Reset All</span>
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={() => {
                    setSelectedFilters([]);
                  }}
                >
                  <img src={RedDeleteIcon} alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSelected;