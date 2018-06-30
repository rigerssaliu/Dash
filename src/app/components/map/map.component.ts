import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  polylineAPI: any[] = [];
  point: any[] = [];
  layers: any[];
  //Create an instance of service
  constructor(private cameraSettingsService: CameraService) { }

  ngOnInit() {
    //Subscribe the observable that get data from Api
    this.cameraSettingsService.getCameraLocation().subscribe(data => {
      console.log(data);
      // Create the structure of the polyline
      data.forEach(element => {
        this.point.push(element.latitude);
        this.point.push(element.longtitude);
        this.polylineAPI.push(this.point);
        this.point = [];
      });

      console.log(this.polylineAPI)

      // Segments Layers
      this.layers = [
        //L.circle([46.95, -122], { radius: 5000 }),
        //L.polygon([[46.8, -121.85], [46.92, -121.92], [46.87, -121.8]]),
        //L.marker([46.879966, -121.726909]),

        // Polyline from the API
        // L.polyline(this.polylineAPI, {
        //   color: 'green'
        // }
        // ),

        //Segments
        L.polyline([
          [41.890494, 12.494968], [41.889216, 12.502070], [41.890363, 12.506469],
        ], {
            color: 'green'
          }
        ),
        L.polyline([
          [41.888685, 12.498036], [41.888018, 12.499688], [41.887279, 12.502199],
        ], {
            color: 'yellow'
          }
        ),
        L.polyline([
          [41.888941, 12.498036], [41.887263, 12.503336]
        ], {
            color: 'red'
          }
        ),
        L.polyline([
          [41.887513, 12.496126], [41.889376, 12.496770]
        ], {
            color: 'black'
          }
        ),
        L.polyline([
          [41.887283, 12.497371], [41.889631, 12.498358]
        ], {
            //color:''
          }
        )
      ];
      this.layers.push(L.polyline(this.polylineAPI, {
        color: 'green'
      }
      ) )
      // Add markers from the API to the map
      var cameraID = 1;
      this.polylineAPI.forEach(element => {
        this.layers.push(L.marker(element, {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png',
          }),
          title: 'Camera ' + cameraID
        }).bindPopup(`<b>Latitude Longtitude<b>
         <a href="https://www.google.com">INFO</a><br>Camera ` + cameraID)
      );
        cameraID++
      });
    })
  }




  //Layers Controller
  layersControl = {
    baseLayers: {
      'Google Map': L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: '',
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      }),
      'Google Satellite Map': L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        attribution: '',
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      }),
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '',
          detectRetina: true
        }),
      'Open Cycle Map': L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '',
          detectRetina: true

        })
    },
    overlays: {

      'Study Zone 1 KM': L.circle([41.888676, 12.5009244],
        { radius: 1000 }),
      //'Big Square': L.polygon([[41.888676, 12.5009244], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  }
  //Options for Layers
  options = {
    //Layers of the map when it's initialize
    layers: [
      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: '&copy; <a href="https://rayonit.com/">RayonIt</a>',
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      }),
      L.marker([41.888676, 12.5009244], {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png',
        }),
        draggable: false,
        title: 'Radius 500',
        opacity: 1 //0-1
      }).bindPopup("<b>Starting Point<b> <br>Rome")

    ],
    //Zoom of the map at first
    zoom: 7,
    //Center of the map at first
    center: L.latLng(41.888676, 12.5009244),

  };

}
