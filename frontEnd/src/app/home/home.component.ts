import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home =[]
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getHome()
      .subscribe(
        res => this.home =res,
        err => console.log(err)
      )
  }

}
