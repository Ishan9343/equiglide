import React from "react";
import "../styling/header.css";
const header = () => {
  return (
    <>
      <div className="heading container-fluid">
        <p
          style={{
            fontStyle: "italic",
            fontSize: "30px",
            color: "red",
            textAlign: "center",
          }}
        >
          <div class="mx-2 spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <b>Best Season Styles</b>
          <div class="mx-2 spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </p>
        <p
          style={{ fontStyle: "italic", fontSize: "25px", textAlign: "center" }}
        >
          Your Favourite Top Demands!
        </p>
      </div>
    </>
  );
};
export default header;
