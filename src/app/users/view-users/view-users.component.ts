import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  constructor(private userService:UserService) { }
   usersList:any;
  ngOnInit(): void {
    this.userService.listUsers().subscribe((data)=>{this.usersList=data;})
  }

}
