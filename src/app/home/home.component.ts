import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: any = "";

  constructor(private router : Router) { }

  
  ngOnInit() {
    this.username = sessionStorage.getItem("username")
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }


}
