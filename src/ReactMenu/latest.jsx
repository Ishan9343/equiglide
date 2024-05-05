import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c3 from "../images/c3.jpg";
import f_l3 from "../images/insta_logo.jpg"

import Carousel from "react-bootstrap/Carousel";

const latest = () => {
  return (
    <>
      <hr></hr>
      <h2 className="mt-4 text-dark">
        <h3 className="text-dark m-auto"><b>E</b>xclusive <b>A</b>rrivals <span class="badge text-bg-warning">New</span></h3>
      </h2>

      <Carousel>
        <Carousel.Item>
        <img className="img-fluid" src={c4}></img>
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="img-fluid" src={c5}></img>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        
        
      </Carousel>
      <div className="latest container">
        <p style={{marginTop:"2rem",fontStyle:"italic",textAlign:"center",fontFamily:"sans-serif"}}>Follow our Instagram Page for <mark>latest</mark> &  <mark>exclusive </mark>updates! </p>
       </div>
    </>
  );
};
export default latest;
