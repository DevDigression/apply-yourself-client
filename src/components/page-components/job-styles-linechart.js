import React from "react";
import NVD3Chart from "react-nvd3";
import { connect } from "react-redux";

export default class JobStylesLineChart extends React.Component {

  getDatum(jobs) {
    // let startup = [],
    //     enterprise = [],
    //     nonprofit = [],
    //     contract = [];


    // jobs.forEach(job => {
    //   let s = 0, e = 0, n = 0, c = 0;

    //   if (job.style === "startup") {
    //   s++;
    //   startup.push({x: s, y: Number(job.stage)});
    // } else if (job.style === "enterprise") {
    //   e++;
    //   enterprise.push({x: e, y: Number(job.stage)});
    // } else if (job.style === "nonprofit") {
    //   n++;
    //   nonprofit.push({x: n, y: Number(job.stage)});
    // } else if (job.style === "contract") {
    //   c++;
    //   contract.push({x: c, y: Number(job.stage)});
    // }
    // });

    // return [
    //   {
    //     values: startup,
    //     key: 'Startup',
    //     color: '#ff7f0e'
    //   },
    //   {
    //     values: enterprise,
    //     key: 'Enterprise',
    //     color: '#2ca02c'
    //   },
    //         {
    //     values: nonprofit,
    //     key: 'Nonprofit',
    //     color: '#2ca02c'
    //   },
    //         {
    //     values: contract,
    //     key: 'Contract',
    //     color: '#2ca02c'
    //   }
    // ];


    jobs.forEach(job => {console.log(job)});
  }


    render() {

      // let fakeJobs = [
      // {style: "enterprise", stage: 1}, 
      // {style:"startup", stage: 3}, 
      // {style:"contract", stage: 1}, 
      // {style: "nonprofit", stage: 3},
      // {style: "enterprise", stage: 2}, 
      // {style:"startup", stage: 3}, 
      // {style:"contract", stage: 1}, 
      // {style: "nonprofit", stage: 2},
      // {style: "enterprise", stage: 3}, 
      // {style: "enterprise", stage: 4},
      // {style: "enterprise", stage: 5},
      // {style: "enterprise", stage: 6},
      // {style: "enterprise", stage: 7},    
      // ]
      // const data = this.getDatum(fakeJobs);
      


  const data = this.getDatum(this.props.jobs);

  var datum = [{
      key: "Startup",
      values: [ [0 , 0], [1 , 1], [2, 2], [3, 3], [4, 4], [5, 5]] 
      // mean: 3
    }
  ];





      return (
        <div>
         {
        //   React.createElement(NVD3Chart, {
        //     // xAxis: {
        //     //   tickFormat: function(d){
        //     //   console.log(d); 
        //     //     return d; }
        //     // },
        //     // yAxis: {
        //     //   tickFormat: function(d) {
        //     //     console.log(d); 
        //     //     return d; }
        //     // },
        //     xDomain: [0, 5],
        //     yDomain: [0, 7],
        //     type:'lineChart',
        //     datum: data,
        //     x: 'label',
        //     y: 'value',
        //     duration: 1,
        //     // margin: {
        //     //   left: 200
        //     // }
        //   })
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
