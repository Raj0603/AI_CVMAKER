import React, { useState } from "react";
import "./Slider.css";
import { images } from "./SliderData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Slider() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <>
      <div className="slider-main-body">
        <div className="heading">Build your resume</div>
        <div className="subheading">Select from the following templates</div>
        <div className="template-container grid12">
          <Link to="/body" className="template" style={{ backgroundImage: `url(${images[0].img})` }}>
          </Link>
          <div className="template" style={{ backgroundImage: `url(${images[1].img})` }}>
          </div>
          <div className="template" style={{ backgroundImage: `url(${images[2].img})` }}>
          </div>
          <div className="template" style={{ backgroundImage: `url(${images[3].img})` }}>
          </div>
        </div>
      </div>
    </>
    // <div className="carousel">
    //   <div
    //     className="carouselInner"
    //     style={{ backgroundImage: `url(${images[currImg].img})` }}
    //   >
    //     <div
    //       className="left"
    //       onClick={() => {
    //         currImg > 0 && setCurrImg(currImg - 1);
    //       }}
    //     >
    //       <ArrowBackIosIcon style={{ fontSize: 30 }} />
    //     </div>
    //     {/* <Link to="/Resumetemp2"> */}
    //     <div className="center">
    //       <h1 className="slider-h1" >{images[currImg].title}</h1>
    //       <p className="slider-p" >{images[currImg].subtitle}</p>
    //     </div>
    //     <div
    //       className="right"
    //       onClick={() => {
    //         currImg < images.length - 1 && setCurrImg(currImg + 1);
    //       }}
    //     >
    //       <ArrowForwardIosIcon style={{ fontSize: 30 }} />
    //     </div>
    //   </div>
    //   <Link to="/Body">
    //     <button className="slider-button">Use This Template</button>
    //   </Link>
    // </div>
  );
}

export default Slider;