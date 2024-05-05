import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Categories from "../productData/productPage";

const Product = ({ filterValue }) => {
  const [data, setData] = useState(Categories);

  useEffect(() => {
    // Filter the Categories based on filterValue and set the data
    const filteredData = Categories.filter(
      (categoryi) => categoryi.type === filterValue
    );
    setData(filteredData);
  }, [filterValue]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {data.map((values) => {
            const { id, title, image, dis } = values;
            return (
              <div className="container-fluid m-5 col" key={id}>
                <div
                  className="m-5 card"
                  style={{ height: "12rem", width: "12rem" }}
                >
                  <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                  />
                  <div className=" card-body">
                    <h5 className="mt-3 card-title">{title}</h5>
                    <p style={{ fontSize: "15px" }} className="mb-2 card-text">
                      {dis}
                    </p>
                    <Link
                      className="btn text-white bg-primary"
                      aria-current="page"
                      to="/enquiry"
                    >
                      Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
