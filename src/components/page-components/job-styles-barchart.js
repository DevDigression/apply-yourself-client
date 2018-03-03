import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";

export class JobStylesBarChart extends React.Component {
  calculateData(styles) {
    let datum = [
      {
        values: []
      }
    ];
    Object.keys(styles).forEach(style => {
      datum[0].values.push({
        label: capitalize(style),
        value: styles[style]
      });
    });
    return datum;
  }
  render() {
    let datum = this.calculateData(this.props.styles);
    let context = {
      getColor: function(i) {
        let colors = ["#ff944d"];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    };
    return (
      <div className="job-styles-barchart">
        <NVD3Chart
          context={context}
          color={{ name: "getColor", type: "function" }}
          tooltip={{ enabled: true }}
          type="discreteBarChart"
          datum={datum}
          x="label"
          y="value"
        />
      </div>
    );
  }
}

function capitalize (string) {
  if (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(JobStylesBarChart);
