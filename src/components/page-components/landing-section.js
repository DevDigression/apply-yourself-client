import React from "react";
import "./landing-section.css";

export default class LandingSection extends React.Component {
  render() {
    let textAlign;
    let imageAlign;
    let sectionText;
    let sectionImage;
    let sectionBg;

    if (this.props.show === "right") {
      textAlign = "left-section";
      imageAlign = "right-section";
      sectionBg = "grey-bg";
    } else {
      textAlign = "right-section";
      imageAlign = "left-section";
      sectionBg = "white-bg";
    }
    // <h2
    //   dangerouslySetInnerHTML={{
    //     __html: this.props.title
    //   }}
    // />

    return (
      <div className={`landing-section ${sectionBg}`}>
        <div className={`landing-image ${imageAlign}`}>
          <img src={this.props.image} />
        </div>
        <div className={`landing-text ${textAlign}`}>
          <h2>{this.props.title}</h2>
<<<<<<< HEAD
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
=======
          <div>{this.props.content}</div>
>>>>>>> ac80c7a5d3621f987a55f1944e705f979ca8bfff
        </div>
      </div>
    );
  }
}
