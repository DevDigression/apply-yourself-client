import React from "react";
import NVD3Chart from "react-nvd3";

export default class JobScatterChart extends React.Component {
  jobsData(jobs) {
            let data = [];
            let styles = ['Startup', 'Enterprise', 'Nonprofit', 'Contract'];

            for (let i = 0; i < styles.length; i++) {
                data.push({
                    key: styles[i],
                    values: []
                });
            }

            for (let j = 0; j < jobs.length; j++) {
              if (jobs[j].style === "startup") {
                data[0].values.push({
                  x: jobs[j].priority,
                  y: Number(jobs[j].stage),
                  size: 10,
                  shape: 'circle'});
            } else if (jobs[j].style === "enterprise") {
                data[1].values.push({
                  x: jobs[j].priority,
                  y: Number(jobs[j].stage),
                  size: 10,
                  shape: 'triangle-up'});
            } else if (jobs[j].style === "nonprofit") {
                data[2].values.push({
                  x: jobs[j].priority,
                  y: Number(jobs[j].stage),
                  size: 10,
                  shape: 'diamond'});
            } else if (jobs[j].style === "contract") {
                data[3].values.push({
                  x: jobs[j].priority,
                  y: Number(jobs[j].stage),
                  size: 10,
                  shape: 'square'});
            }
         
            }
      return data;
    }

    render() {
      let jobs = this.props.jobs;

      return (
        <div>
          <NVD3Chart
            type="scatterChart"
            datum={this.jobsData(jobs)}
            x="Priority"
            y="Stage"
            // containerStyle={{ width: 500, height: 500 }}
          />
        </div>
      );
    }
  };