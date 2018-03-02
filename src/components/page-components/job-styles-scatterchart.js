import React from "react";
import NVD3Chart from "react-nvd3";
import { connect } from "react-redux";

export default class JobStylesScatterChart extends React.Component {
jobsData(jobs, stages) {
          var data = [],
              styles = ['startup', 'enterprise', 'nonprofit', 'contract'],
              shapes = ['circle', 'triangle-up', 'diamond', 'square']

          for (var i = 0; i < jobs.length; i++) {
              data.push({
                  key: styles[i],
                  values: []
              });
              for (var j = 0; j < stages; j++) {
                  data[i].values.push({
                      x: Math.random()*10,
                      y: Math.random()*5,
                      size: Math.round(Math.random() * 100) / 100,
                      shape: shapes[j-1]
                  });
              }
          }
          return data;
      }



    render() {
      let jobStyles = Object.keys(this.props.styles);
      console.log(jobStyles)
      return (
        <div>
          <NVD3Chart
            type="scatterChart"
            datum={this.jobsData(jobStyles, 10)}
            containerStyle={{ width: 500, height: 500 }}
          />
        </div>
      );
    }
  };