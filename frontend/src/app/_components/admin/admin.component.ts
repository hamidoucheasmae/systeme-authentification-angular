import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  content?: string;
  currentUser: any;


  constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private router : Router) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();

    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.router.navigate(['/login'])
         return false
      }
    );
  }

  logout(): void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
