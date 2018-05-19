import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-timelinechart',
  templateUrl: './timelinechart.component.html',
  styleUrls: ['./timelinechart.component.css']
})
export class TimelinechartComponent implements OnInit {

  //Variables
  timeLineChart = [];

  //Krijoj nje instance te servisit +++ dependency injection
  //Create an instance of DashboardService
  constructor(private appSettingsService: DashboardService) { }

  ngOnInit() {

    this.appSettingsService.getJSON().subscribe(data => {

      //Test for getting the data from subcribe
     // console.log(data)

      // aksesimi i nje fushe te caktuar te filet JSON
      // Accesing a certain field at JSON file
      let averageSpeed = data.result.segmentSpeeds.map(res => res.segments.map(res => res.travelTimeMinutes));
      let segmentCode = data.result.segmentSpeeds.map(res => res.segments.map(x => x.code));
      //console.log(averageSpeed)


      


      //krijimi i chart
      //Chart creation
      this.timeLineChart = new Chart('canvas4', {
        type: 'line',
        data: {
          labels: segmentCode[0],
          datasets: [
            {
              label: 'Segment Travel Time Minutes',
              data: averageSpeed[0],
              borderColor: "#c62f29",
              backgroundColor: 'orange',
              fill: true
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Test with Data from local JSON file'
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true,
              fillStyle: 'red'
            }]
          },
          yAxes: [{
            display: true
          }],
        //   pan: {
        //     // Boolean to enable panning
        //     enabled: true,

        //     // Panning directions. Remove the appropriate direction to disable 
        //     // Eg. 'y' would only allow panning in the y direction
        //     mode: 'xy'
        // },

        // // Container for zoom options
        // zoom: {
        //     // Boolean to enable zooming
        //     enabled: true,

        //     // Zooming directions. Remove the appropriate direction to disable 
        //     // Eg. 'y' would only allow zooming in the y direction
        //     mode: 'xy',
        // },
        // animation: {
        //     duration: 8000,
        //     //easing: 'linear'
        // }

        }
      })
    });
    
  }

}
