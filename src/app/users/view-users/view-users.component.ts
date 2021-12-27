import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  {id:1, name: 'Hydrogen', username: 'ARC', email: 'ARC@emailc.com'},
  
];


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  constructor(private userService:UserService) { }
   usersList:User[]=[];
   displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];
  // dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.userService.listUsers().subscribe((data)=>{this.usersList=data;})
    
  }

 

}
