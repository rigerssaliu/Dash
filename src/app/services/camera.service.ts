import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CameraService {
  // Api url
  private urlAPI = "http://192.168.0.63:8092/cams"
  // Create an instance of HTTPCLIENT
  constructor(private http: HttpClient) { }
  //Create a method to make a get request to the Api
  public getCameraLocation(): Observable<any> {
    return this.http.get(this.urlAPI)
  }

}
