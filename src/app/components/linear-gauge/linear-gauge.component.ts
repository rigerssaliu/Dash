import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
  styleUrls: ['./linear-gauge.component.css']
})
export class LinearGaugeComponent implements OnInit {
  //Variables
  //pieChart = [];
  segmentsSave: any[];

  segmentsCodeFiltered: any[] = [];
  segmentsSpeedBucketFiltered0: any[] = [];
  segmentsSpeedBucketFiltered1: any[] = [];
  segmentsSpeedBucketFiltered2: any[] = [];
  segmentsSpeedBucketFiltered3: any[] = [];
  segmentsSpeedBucketFiltered4: any[] = [];
  segmentsCode0: any[] = [];
  showSegmentsCode0: any[] = []
  segmentsCode1: any[] = [];
  showSegmentsCode1: any[] = []
  segmentsCode2: any[] = [];
  showSegmentsCode2: any[] = []
  segmentsCode3: any[] = [];
  showSegmentsCode3: any[] = []
  segmentsCode4: any[] = [];
  showSegmentsCode4: any[] = []

  sum: number;
  divShow0 = false;
  divShow1 = false;
  divShow2 = false;
  divShow3 = false;
  divShow4 = false;
  constructor(private appSettingsService: DashboardService) { }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data => {

      data.result.segmentSpeeds.map(res => {
        this.segmentsSave = res.segments;
      });

      this.segmentsSave.map(segment => {
        if (segment.speedBucket == 0) {
          this.segmentsSpeedBucketFiltered0.push(segment.speedBucket);
          this.segmentsCode0.push(segment.code);
        } else if (segment.speedBucket == 1) {
          this.segmentsSpeedBucketFiltered1.push(segment.speedBucket)
          this.segmentsCode1.push(segment.code);
        } else if (segment.speedBucket == 2) {
          this.segmentsSpeedBucketFiltered2.push(segment.speedBucket)
          this.segmentsCode2.push(segment.code);
        } else if (segment.speedBucket == 3) {
          this.segmentsSpeedBucketFiltered3.push(segment.speedBucket)
          this.segmentsCode3.push(segment.code);
        } else {
          this.segmentsSpeedBucketFiltered4.push(segment.speedBucket)
          this.segmentsCode4.push(segment.code);

        }
      });

      let chartData: any[] = [];
      chartData.push(this.segmentsSpeedBucketFiltered0.length)
      chartData.push(this.segmentsSpeedBucketFiltered1.length)
      chartData.push(this.segmentsSpeedBucketFiltered2.length)
      chartData.push(this.segmentsSpeedBucketFiltered3.length)
      chartData.push(this.segmentsSpeedBucketFiltered4.length)
      
      this.sum = this.segmentsSpeedBucketFiltered0.length +
      this.segmentsSpeedBucketFiltered1.length +
      this.segmentsSpeedBucketFiltered2.length +
      this.segmentsSpeedBucketFiltered3.length +
      this.segmentsSpeedBucketFiltered4.length
      
      // console.log(this.sum)
      // console.log(this.segmentsSpeedBucketFiltered0.length)
      // console.log((this.segmentsSpeedBucketFiltered0.length/this.sum)*100)
      // this.createChart(chartData);
    });
  }

  getWidth0 () {
    return (this.segmentsSpeedBucketFiltered0.length/this.sum)*100+ '%'
  }
  getWidth1 () {
    return (this.segmentsSpeedBucketFiltered1.length/this.sum)*100+ '%'
  }
  getWidth2 () {
    return (this.segmentsSpeedBucketFiltered2.length/this.sum)*100+ '%'
  }
  getWidth3 () {
    return (this.segmentsSpeedBucketFiltered3.length/this.sum)*100+ '%'
  }
  getWidth4 () {
    return (this.segmentsSpeedBucketFiltered4.length/this.sum)*100+ '%'
  }

  show0() {
    this.divShow0=!this.divShow0
    this.showSegmentsCode0 = this.segmentsCode0

    //console.log(this.segmentsCode0)
  }

  show1() {
    this.divShow1=!this.divShow1
    this.showSegmentsCode1 = this.segmentsCode1

    //console.log(this.segmentsCode1)
  }

  show2() {
    this.divShow2=!this.divShow2
    this.showSegmentsCode2 = this.segmentsCode2

    //console.log(this.segmentsCode2)
  }

  show3() {
    this.divShow3=!this.divShow3
    this.showSegmentsCode3 = this.segmentsCode3

    //console.log(this.segmentsCode3)
  }
  show4() {
    this.divShow4=!this.divShow4
    this.showSegmentsCode4 = this.segmentsCode4

    //console.log(this.segmentsCode4)
  }

}
