import React from "react";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";

const About = () => {
  return (
    <>
      <div className=" mt-0 row">
        <h2 id="about" className="mt-0 text-dark">
          <hr></hr>
          <small className="text-dark mt-4">
            <b>A</b>bout <b>U</b>s
          </small>
        </h2>
        <div class="container-fluid text-center">
          <div class="mt-2 row">
            <div class="col-md">
              <img
                className="img-fluid img-thumbnail"
                style={{ height: "16rem" }}
                src={c1}
              ></img>
              <p className="mt-2">
                EquiGlide is saddlery products provider , has been dedicated to
                produce fine quality and innovation with a view to provide Best
                Quality Equestrian Products to its customers. Our products are
                well furnised and fullfill the requirements of the international
                market. We have the prime motive of maintaining quality
                standards at each production level so that we always have a
                winning edge over our competitors. We offer a wide Portfolio all
                kinds of <b> Saddlery, Riding Equipments and Accessories. </b>
              </p>
            </div>
            <div class="col-md">
              <img
                className="img-fluid img-thumbnail"
                style={{ height: "16rem" }}
                src={c2}
              ></img>
              <p className="mt-2">
                We have a teams of experienced and skilled staff who manufacture
                high quality products. With their knowledge, expertise and
                creativity, we are moving forward with new ideas & innovative
                products. Our men are engaged in this profession from
                generations, which has enabled them to understand and develop
                products that accurately meet customer specifications.
              </p>
            </div>
          </div>
          <p class="lead">
            Strict vigil is maintained right from the selection of raw material
            to the final dispatch of the finished product.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
