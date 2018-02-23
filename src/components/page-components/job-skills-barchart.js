import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import "./job-skills-barchart.css";

export class JobSkillsBarChart extends React.Component {
  calculateData(skills) {
    let datum = [
      {
        values: []
      }
    ];
    Object.keys(skills).forEach(skill => {
      datum[0].values.push({
        label: skill,
        value: skills[skill]
      });
    });
    datum[0].values.sort((a, b) => b.value - a.value);
    return datum;
  }
  render() {
    let datum = this.calculateData(this.props.skills);
    let context = {
      getColor: function(i) {
        let colors = ["#ff944d"];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    };
    return (
      <div className="job-skills-barchart">
        <NVD3Chart
          // height={300}
          // width={370}
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(JobSkillsBarChart);
