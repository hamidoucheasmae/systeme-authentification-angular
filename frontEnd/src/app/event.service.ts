import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private _homeUrl ="http://localhost:3000/api/home";
  private _adminDashboardUrl ="http://localhost:3000/api/adminDashboard";

  constructor(private http: HttpClient) { }

  getHome(){
    return this.http.get<any>(this._homeUrl)
  }


  getAdminDashboard(){
    return this.http.get<any>(this._adminDashboardUrl)
  }
}
