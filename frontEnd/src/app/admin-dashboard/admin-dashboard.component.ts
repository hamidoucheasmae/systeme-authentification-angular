import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  adminDashboard =[]
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getAdminDashboard()
      .subscribe(
        res => this.adminDashboard =res,
        err => console.log(err)
      )
  }

}
