import React from "react";
import logo from "../images/logonew.jpg"; // Import the logo
import Categories from "../productData/productPage";
import { Link } from "react-router-dom";
import "../styling/styling.css";
const Navbar = ({ onFilterChange }) => {
  const filterResult = (selectedType) => {
    
    onFilterChange(selectedType);
  };

  // Function to handle category selection
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-black border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
        <a className="navbar-brand" href="/equiglide">
          {/* Use the imported logo */}
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="50"
            
            className="d-inline-block align-text-top"
          />
        </a>
        <a className=" navbar-brand" href="/equiglide">
          <h3
            style={{ fontFamily: "serif", marginTop: "5px",marginRight:"1rem",marginLeft:"4px" }}
            className="text-white"
          >
             EquiGlide
          </h3>
        </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" p-1 collapse navbar-collapse" id="navbarNav">
            <ul class="mx-4  navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/equiglide">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
              <a
                className="nav-link text-light dropdown-toggle"
                href="./products"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item "
                  to="../equiglide/product"
                  onClick={() => filterResult("Horse Leashes and Ropes")}
                >
                  Leashes & Ropes
                </Link>
                <Link
                  className="dropdown-item"
                  to="../equiglide/product"
                  onClick={() => filterResult("Horse Wear")}
                >
                  Horse Wear
                </Link>
                <Link
                  className="dropdown-item"
                  to="../equiglide/product"
                  onClick={() => filterResult("Saddle Pads")}
                >
                  Saddle Pads
                </Link>
                <Link
                  className="dropdown-item"
                  to="../equiglide/product"
                  onClick={() => filterResult("Horse Halter")}
                >
                  Horse Halter
                </Link>
                <Link
                  className="dropdown-item"
                  to="../equiglide/product"
                  onClick={() => filterResult("Horse Accessories")}
                >
                  Horse Accessories
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  to="../equiglide/product"
                  onClick={() => filterResult("Dog Accessories")}
                >
                  Dog Accessories
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a
                className=" text-white nav-link active"
                aria-current="page"
                href="../equiglide/#about"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-white nav-link active"
                aria-current="page"
                href="../equiglide/#enquiry"
              >
                Enquiry
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-white nav-link active"
                aria-current="page"
                href="../equiglide/#enquiry"
              >
                
                Contact Us
              </a>
            </li>
            <li  className=" nav-item">
              <a
              
                className="text-white nav-link active"
                aria-current="page"
                href="#"
              >
                FAQ
              </a>
            </li>
            </ul>
            
          </div>
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;