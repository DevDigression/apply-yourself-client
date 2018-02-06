import React from "react";
//import "./landing-step.css";

export default function LandingStep(props) {
  return (
    <div className="steps-section">
      <img src={props.img} />
      <h4>{props.title} </h4>
      <p>{props.children}</p>
    </div>
  );
}
