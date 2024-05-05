import React from "react";
import "../styling/styling.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import horse_img from "../images/horse.jpg";
import About from "./about";
import Latest from "./latest";
import Enquiry from "./Enquiry";
import Footer from "./footer";
import Header from "./header";

const Home = () => {
  return (
    <>
     <Header/>
    <div className="body container-fluid">
      <img       
        src={horse_img}
        
        className="img-fluid"
        alt="..."
      />

      <div className="container">
     
        <Latest />
        <About />
        <Enquiry/>
        <Footer/>
       

       

        </div></div>
    </>
  );
};
export default Home;
