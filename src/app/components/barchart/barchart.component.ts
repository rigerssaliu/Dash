import { DashboardService } from './../../services/dashboard.service';
import { Chart } from 'chart.js';
import { Component, OnInit, Testability } from '@angular/core';
import { map } from 'rxjs/operators/map';
import {Input} from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  //Variables
  input:number= 11 ; 
  
  barChart: any[];

  segmentsSave: any[];
  // Inicializo fillimisht vektorin sepse ka kushtin if + push
  segmentsCodeFiltered: any[] = [];
  segmentsSpeedFiltered: any[] = [];

  segmentsCodeFiltered2 : any[] = [];
  segmentsSpeedFiltered2: any[] = [];
  
  onKeyUp(){
    console.log(this.input)
  }
  //Krijoj nje instance te  servisit  +++ dependency injection brenda konstruktorit
  //Create an instance of DashboardService
  constructor(private appSettingsService: DashboardService) { }
  
  ngOnInit() {
    this.appSettingsService.getJSON()
    .subscribe(data => {

      //Test for getting the data from subcribe
      //console.log(data)

      // aksesimi i nje fushe te caktuar te filet JSON
      // Accesing a certain field at JSON file

      //Marr segmentet nga JSON dhe i vendos ne nje vektor objektesh
      data.result.segmentSpeeds.map(res => {
        this.segmentsSave = res.segments;
      });

      
      var colors = [];
      //Nga cdo segment filtroj ato qe kane nje shpejtesi te caktuar
      // dhe ruaj kodin per te ne nje vektor
      colors = this.segmentsSave.map(segment => {
        this.segmentsSpeedFiltered.push(segment.speed);
        this.segmentsCodeFiltered.push(segment.code);
        return segment.speed > this.input ? "red" : "blue";
        // if (segment.speed == 11) {
        //   this.segmentsSpeedFiltered.push(segment.speed);
        //   this.segmentsCodeFiltered.push(segment.code);
        // } else if (segment.speed == 20) {
        //   this.segmentsSpeedFiltered2.push(segment.speed);
        //   this.segmentsCodeFiltered.push(segment.code);
        // }
      });
      


      //Before
      //let averageSpeed = data.result.segmentSpeeds.map(res => res.segments.map(res => res.speed));
      //After
      let averageSpeed = this.segmentsSave.map(segment => segment.speed);
      //Before
      //let segmentCode = data.result.segmentSpeeds.map(res => res.segments.map(x => x.code));
      //After 
      let segmentCode = this.segmentsSave.map(segment => segment.code);
      //console.log(averageSpeed)

      //Filtroj gjithe segmentet me shpejtesi 11
      //let mapped = averageSpeed.map(elem => elem == 11)

      //var test = averageSpeed.filter(elem => elem == 11)
      // console.log(test)
      // console.log(test.length)

      //krijimi i chart
      //Chart creation
      // Global Options Fonts
      Chart.defaults.global.defaultFontColor = 'white';


      this.barChart = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.segmentsCodeFiltered,
          

          datasets: [
            {
              label: 'Segment speed',
              data: this.segmentsSpeedFiltered,
              borderColor: "#blue",
              backgroundColor: colors,
              fill: true
            }
            // {
            //   label: 'Segment speed',
            //   data: this.segmentsSpeedFiltered2,
            //   borderColor: "#red",
            //   backgroundColor: 'red',
            //   fill: true
            // }
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
            }],

            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          },


        }
      })
    });
  }

}
