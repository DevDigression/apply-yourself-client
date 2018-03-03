import React from "react";
import NVD3Chart from "react-nvd3";

export default class JobStylesScatterChart extends React.Component {
jobsData(jobs, stages) {
          var data = [],
              styles = ['startup', 'enterprise', 'nonprofit', 'contract'],
              shapes = ['circle', 'triangle-up', 'diamond', 'square'];
          var xVal = 0;

          for (var i = 0; i < 4; i++) {
              data.push({
                  key: styles[i],
                  values: []
              });
              console.log(data);
              console.log(jobs);
              for (var j = 0; j < jobs.length; j++) {
                  data[i].values.push({
                      x: jobs[i].keywords.length,
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
      return (
        <div>
          <NVD3Chart
            type="scatterChart"
            datum={this.jobsData(jobs, 7)}
            containerStyle={{ width: 500, height: 500 }}
          />
        </div>
      );
    }
  };