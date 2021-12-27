import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/view-users/view-users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  baseURL:string='https://jsonplaceholder.typicode.com/';

  listUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL+'users');
  }

  listUser(id:any)
  {
    return this.httpClient.get(this.baseURL+'users/'+id);
  }

  addUser(userObj:any)
  {
    return this.httpClient.post(this.baseURL+'users',userObj);
  }

  deleteUser(id:any){
    return this.httpClient.delete(this.baseURL+'users/'+id);
  }
  updateUser(id:any ,userObj:any)
  {
    return this.httpClient.put(this.baseURL+'users/'+id,userObj);
  }
}
