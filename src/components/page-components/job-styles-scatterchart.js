import React from "react";
import NVD3Chart from "react-nvd3";

export default class JobStylesScatterChart extends React.Component {
jobsData(jobs, stages) {
  console.log(jobs);
  console.log(stages);
          var data = [],
              styles = ['startup', 'enterprise', 'nonprofit', 'contract'],
              shapes = ['circle', 'triangle-up', 'diamond', 'square']
          var xVal = 0;

          for (var i = 0; i < jobs.length; i++) {
              data.push({
                  key: styles[i],
                  values: []
              });
              for (var j = 0; j < stages; j++) {
                  data[i].values.push({
                      x: xVal++,
                      y: jobs[i].stage,
                      // size: Math.round(Math.random() * 100) / 100,
                      shape: shapes[j-1]
                  });
              }
          }
          return data;
      }



    render() {
      let jobs = this.props.jobs;
      let jobStyles = this.props.styles;
      let totalJobs = this.props.totalJobs;
      console.log(jobStyles)
      return (
        <div>
          <NVD3Chart
            type="scatterChart"
            datum={this.jobsData(jobs, totalJobs)}
            containerStyle={{ width: 500, height: 500 }}
          />
        </div>
      );
    }
  };