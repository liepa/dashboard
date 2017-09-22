import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js'
var BarChart = require("react-chartjs").Bar;


function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push((Math.random() * (max - min)) + min);
  }
  return rtn;
}

module.exports = function(props={}) {
  var targetId = props["targetId"] || 'bar-chart'
  var options = Chart.defaults.bar;
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: rand(2, 100, 7)
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: rand(32, 200, 7)
        }
    ]
  };

  ReactDOM.render(
    <BarChart data={data} options={options} width={500} height={500}/>,
    document.getElementById(targetId)
  );
};
