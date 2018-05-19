 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  //Url of the Api
  private url = './assets/datarreze05km.json'

  // HttpClient Injected as a dependency 
  constructor(private http: HttpClient) {
    //test for getting the data
    // this.getJSON().subscribe(data => {
    //     console.log(data)
    // });
  }
  // Create a method of Observable
  public getJSON(): Observable<any> {
    return this.http.get(this.url)
  }

}
