import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
 
  
  constructor(private userService:UserService,private activateRoute:ActivatedRoute) { }
  uid:any;
  userId:any;
  userDetails:any;
  ngOnInit(): void {
   this.activateRoute.params.subscribe(data=>this.uid=data) ;
    this.userId=this.uid.id;
  
   this.userService.listUser(this.userId).subscribe(data=>{
     this.userDetails=data;
     
   })
  }

}
