import React from "react";
import NVD3Chart from "react-nvd3";

export default class JobStylesScatterChart extends React.Component {
jobsData(jobs) {
          let data = [],
              styles = ['startup', 'enterprise', 'nonprofit', 'contract'],
              shapes = ['circle', 'triangle-up', 'diamond', 'square'];

          for (let i = 0; i < styles.length; i++) {
              data.push({
                  key: styles[i],
                  values: []
              });
          //     for (var j = 0; j < jobs.length; j++) {
          //         data[i].values.push({
          //             x: jobs[i].keywords.length,
          //             y: jobs[i].stage,
          //             // size: Math.round(Math.random() * 100) / 100,
          //             shape: shapes[j-1]
          //         });
          //         console.log(data[i].values);
          //     }
          // }
          console.log(data);
          for (let j = 0; j < jobs.length; j++) {
            if (jobs[j].style === "startup") {
              data[i].values.push({
                x: jobs[j].keywords.length,
                y: jobs[j].stage,
                size: Math.round(Math.random() * 100) / 100,
                shape: 'circle'});
          } else if (jobs[i].style === "enterprise") {
              data[i].values.push({
                x: jobs[j].keywords.length,
                y: jobs[j].stage,
                size: Math.round(Math.random() * 100) / 100,
                shape: 'circle'});
          } else if (jobs[j].style === "nonprofit") {
              data[i].values.push({
                x: jobs[j].keywords.length,
                y: jobs[j].stage,
                size: Math.round(Math.random() * 100) / 100,
                shape: 'circle'});
          } else if (jobs[i].style === "contract") {
              data[i].values.push({
                x: jobs[j].keywords.length,
                y: jobs[j].stage,
                size: Math.round(Math.random() * 100) / 100,
                shape: 'circle'});
          }
       
    }
    console.log(data);
       return data;
}
}
    render() {
      let jobs = this.props.jobs;
      let jobStyles = this.props.styles;
      let totalJobs = this.props.totalJobs;
      return (
        <div>
          <NVD3Chart
            type="scatterChart"
            datum={this.jobsData(jobs)}
            // containerStyle={{ width: 1000, height: 500 }}
          />
        </div>
      );
    }
  };