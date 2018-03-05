import React from "react";
import NVD3Chart from "react-nvd3";

export default class JobsLineChart extends React.Component {

  getDatum(jobs) {

  const data = [
    {
      key: "startup",
      values: []
    },
    {
      key: "enterprise",
      values: []
    },
    {
      key: "nonprofit",
      values: []
    },
    {
      key: "contract",
      values: []
    }
  ];

  jobs.forEach(job => {
    if (job.style === "startup") {
      data[0].values.push([job.priority, Number(job.stage)]);
    } else if (job.style === "enterprise") {
      data[1].values.push([job.priority, Number(job.stage)]);
    } else if (job.style === "nonprofit") {
      data[2].values.push([job.priority, Number(job.stage)]);
    } else if (job.style === "contract") {
      data[3].values.push([job.priority, Number(job.stage)]);
    }
  });

  return data;
}
    render() {      


const testJobs = [
  {
    priority: 4, stage: "1"
  },
    {
    priority: 10, stage: "7"
  },
    {
    priority: 2, stage: "6"
  },
    {
    priority: 3, stage: "2"
  },
    {
    priority: 4, stage: "2"
  },
];

  var datum = this.getDatum(this.props.jobs);





      return (
        <div>
         {
            React.createElement(NVD3Chart, {
            type:'lineChart',
            datum: datum,
            x: function(d) {
              return d[0];
            },
            y: function(d) {
              return d[1];
            },
          })
         }
        </div>
      )
    }
  };
