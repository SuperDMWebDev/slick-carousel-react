import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Slider from "react-slick";
function App1() {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;

  //   return <button onClickclassName="slide-arrow next-arrow"></button>;
  // }
  // function SamplePrevArrow(props) {
  //   return <button class="slide-arrow prev-arrow"></button>;
  // }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slide-arrow next-arrow"
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slide-arrow prev-arrow"
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "sample",
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default App1;
