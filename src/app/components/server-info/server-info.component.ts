import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {

  userFromServer:any

  constructor(private usesServices: UsersService, private activetedRoute: ActivatedRoute) {
    this.activetedRoute.params.subscribe(params => {
      this.usesServices.getUsersById(params.id).subscribe(value => {
        this.userFromServer = value
      })
    })
  }

ngOnInit(): void {
  }

}
