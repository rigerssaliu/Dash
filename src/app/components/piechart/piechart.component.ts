import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../services/dashboard.service';
import { Chart } from 'chart.js';
import 'chartjs-plugin-zoom'

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  //Variables
  pieChart = [];

  segmentsSave: any[];

  segmentsCodeFiltered: any[] = [];
  segmentsSpeedBucketFiltered0: any[] = [];
  segmentsSpeedBucketFiltered1: any[] = [];
  segmentsSpeedBucketFiltered2: any[] = [];
  segmentsSpeedBucketFiltered3: any[] = [];
  segmentsSpeedBucketFiltered4: any[] = [];

  //Krijoj nje instance te servisit +++ dependency injection
  //Create an instance of DashboardService
  constructor(private appSettingsService: DashboardService) { }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data => {

      data.result.segmentSpeeds.map(res => {
        this.segmentsSave = res.segments;
      });

      this.segmentsSave.map(segment => {
        if (segment.speedBucket == 0) {
          this.segmentsSpeedBucketFiltered0.push(segment.speedBucket);
        } else if (segment.speedBucket == 1) {
          this.segmentsSpeedBucketFiltered1.push(segment.speedBucket)
        } else if (segment.speedBucket == 2) {
          this.segmentsSpeedBucketFiltered2.push(segment.speedBucket)
        } else if (segment.speedBucket == 3) {
          this.segmentsSpeedBucketFiltered3.push(segment.speedBucket)
        } else {
          this.segmentsSpeedBucketFiltered4.push(segment.speedBucket)
        }
      });

      let chartData: any[] = [];
      chartData.push(this.segmentsSpeedBucketFiltered0.length)
      chartData.push(this.segmentsSpeedBucketFiltered1.length)
      chartData.push(this.segmentsSpeedBucketFiltered2.length)
      chartData.push(this.segmentsSpeedBucketFiltered3.length)
      chartData.push(this.segmentsSpeedBucketFiltered4.length)

      this.createChart(chartData);
    });
  }

  createChart(chartData) {
    //krijimi i chart
      //Chart creation
      Chart.defaults.global.defaultFontColor = 'white';

      this.pieChart = new Chart('canvas3', {
        type: 'pie',
        data: {
          datasets: [{
            data: chartData,
            backgroundColor: ['red', 'yellow', 'green', 'blue', 'black']
          }

          ],
          labels: [
            'Speed 0-31% ' + this.segmentsSpeedBucketFiltered0.length + ' Segments',
            'Speed 32-62% ' + this.segmentsSpeedBucketFiltered1.length + ' Segments',
            'Speed 63-92% ' + this.segmentsSpeedBucketFiltered2.length + ' Segments',
            'Speed 93-100% ' + this.segmentsSpeedBucketFiltered3.length + ' Segments',
            this.segmentsSpeedBucketFiltered4.length + ' Segments Closed'
          ],

        },
        options: {
          title: {
            display: true,
            text: 'The Amount of congestion on the segment'
          },


          setChartClickHandler(ctx, chart) {
            ctx.on('click', evt => {
              var activePoints = chart.getElementsAtEvent(evt);
              var label = chart.data.labels[activePoints[0]._index];
              var value = chart.data.datasets[activePoints[0]._datasetIndex].data[activePoints[0]._index];
              console.log(label, value);
            });
          },
        }

      })
  }
}


