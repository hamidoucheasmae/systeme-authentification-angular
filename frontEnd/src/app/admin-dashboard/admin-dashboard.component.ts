import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  adminDashboard =[]
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getAdminDashboard()
      .subscribe(
        res => this.adminDashboard =res,
        err => console.log(err)
      )
  }

}
