import React from "react";
//import "../styling/footer.css"
import f_l1 from "../images/ph_icon.png";
import f_l2 from "../images/fb_logo.jpg";
import f_l3 from "../images/insta_logo.jpg";

const footer = () => {
  return (
    <>
      <hr></hr>
      <div class="footer container text-center">
        <div class="row">
          <div class="col">
            <a href="https://www.facebook.com">
              <img
                style={{ borderRadius: "2rem", width: "50px", height: "50px" }}
                src={f_l2}
              />
            </a>
            
          </div>
          <div class="col">
            <img
              style={{ borderRadius: "2rem", width: "40px", height: "40px" }}
              src={f_l1}
            />
            <p><b>mob:</b> <mark>+91 9807446270</mark> </p>
          </div>
          <div class="col">
            <a href="https://www.instagram.com">
              <img
                style={{ borderRadius: "2rem", width: "50px", height: "50px" }}
                src={f_l3}
              />
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
