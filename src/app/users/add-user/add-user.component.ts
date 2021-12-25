import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }
 
  addUserForm:FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      'username':new FormControl(''),
      'email':new FormControl(''),
      'phone':new FormControl('')
    })
  }
  userCreated:any;
  createUser(){

    this.userService.addUser(this.addUserForm.value).subscribe((data)=>{this.userCreated=data},
    err=>console.log("error while upload"));

  }
 
}
