import React from "react";
import Slider from "react-slick";

export default (props) => {
  return <Slider {...props.settings}>{props.children}</Slider>;
};
