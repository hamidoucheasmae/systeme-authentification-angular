import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// declare let switchCtn:any;
declare  var jQuery:  any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){

    
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       });

       if(user){
         sessionStorage.setItem("username", user.username);
         this.loginForm.reset();
         this.router.navigate(['home'])
       }
       else{
         alert("Les informations sont incorrectes")
       }
    },err=>{
      alert("Erreur")
    })

    
    
  }

}
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router, private authService: AuthService) { }

  ngOnInit() : void {
    this.signupForm = this.formBuilder.group ({
        username : [''],
        email : [''],
        password : ['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Votre compte a été crée avec succès");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=> {
      alert("Erreur")
    }
    )
  }

}

