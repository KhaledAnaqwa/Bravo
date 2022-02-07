import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  REST_API_SERVER= "http://eo66wm2ug7ktzd3.m.pipedream.net/?fromData=1&toDate=2";

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get<string>(this.REST_API_SERVER)
  }
}
