import React from "react";
import NVD3Chart from "react-nvd3";
import { connect } from "react-redux";

export default class JobStylesScatterChart extends React.Component {
jobsData(jobs, stages) {
          var data = [],
              styles = ['startup', 'enterprise', 'nonprofit', 'contract'],
              shapes = ['circle', 'triangle-up', 'diamond', 'square']

          for (var i = 0; i < Object.keys(jobs).length; i++) {
              data.push({
                  key: styles[i],
                  values: []
              });

              for (var j = 0; j < stages; j++) {
                  data[i].values.push({
                      x: jobs[data[i]],
                      y: data[i].stage,
                      // size: Math.round(Math.random() * 100) / 100,
                      shape: shapes[j-1]
                  });
                  console.log(data[i]);
              }
          }
          return data;
      }



    render() {
      let jobStyles = this.props.styles;
      let jobStages = this.props.stages;
      let totalJobs = this.props.totalJobs;
      console.log(jobStyles)
      return (
        <div>
          <NVD3Chart
            type="scatterChart"
            datum={this.jobsData(jobStyles, totalJobs)}
            containerStyle={{ width: 500, height: 500 }}
          />
        </div>
      );
    }
  };