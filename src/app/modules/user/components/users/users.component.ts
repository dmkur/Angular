import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[]

  constructor(private userServices: UserService) {
  }

  ngOnInit(): void {
    this.userServices.getUser().subscribe(value => {
      this.users = value
    })
  }

}
