import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData= <any>{}
  constructor() { }

  ngOnInit(): void {
  }


// method
  loginUser(){ 
console.log(this.loginUserData)
  }
}
