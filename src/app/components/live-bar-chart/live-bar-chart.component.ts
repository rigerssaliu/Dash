import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-bar-chart',
  templateUrl: './live-bar-chart.component.html',
  styleUrls: ['./live-bar-chart.component.css']
})
export class LiveBarChartComponent implements OnInit {
  // Variables
  liveBarChart: any;
  index = 5;

  constructor() { }

  ngOnInit() {
    this.createChart()
  }

  dData = function () {
    return Math.round(Math.random() * 90) + 10
  }

  liveBarChartData = {
    type: 'line',
    data: {
      labels: [1,2,3,4],
      datasets: [
        {
          label: 'Test Live Data',
          data: [this.dData(),this.dData(),this.dData(),this.dData()],
          backgroundColor: 'red',
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  // addData(chart, label, data) {
  //   chart.data.labels.push(label);
  //   chart.data.datasets.forEach((dataset) => {
  //     dataset.data.push(data);
  //   });
  //   chart.update();
  // }
  // Chart Creation
  createChart() {
    // for bind
    let that = this;
    Chart.defaults.global.defaultFontColor = 'white';

    this.liveBarChart = new Chart('canvas5',
      this.liveBarChartData
    )
    //Execute this piece of code evry 1000 ms
    setInterval(function () {
      that.liveBarChart.data.datasets.forEach(element => {
        element.data.shift();
      });

      that.liveBarChart.data.datasets.forEach(element => {
        element.data.push(that.dData());
      });

      that.liveBarChart.data.labels.shift();
      that.liveBarChart.data.labels.push(that.index++);
      

      that.liveBarChart.update();
    }, 2000)
    //this.addData(this.liveBarChart, [1, 2], 50)



  }

}
