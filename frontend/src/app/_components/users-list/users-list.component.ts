import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CrudService } from 'src/app/_services/crud.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  username = '';

  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.retrieveUsers();
  }
  retrieveUsers(): void {
    this.crudService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
  removeAllUsers(): void {
    this.crudService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.crudService.findByUser(this.username)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
