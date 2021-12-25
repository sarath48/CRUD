import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,
   private formBuilder:FormBuilder) { }
  userId:any;
  userDetails:any;
  editUserForm:FormGroup=new FormGroup({});
  dataAvailable:boolean=false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
       this.userId=data['id'];
    })

    if(this.userId!== ''){
       this.userService.listUser(this.userId).subscribe(data=>{
        this.userDetails=data; //Object.assign(userDetails,{data})
        this.editUserForm=this.formBuilder.group({
          'name':new FormControl(this.userDetails.name),
          'email':new FormControl(this.userDetails.email)
        })
        this.dataAvailable =true;
       })
    }
  
  }

   updateUser(){
      this.userService.updateUser(this.userId,this.userDetails).subscribe(
        data=>{ }
      )
   }
 
}
