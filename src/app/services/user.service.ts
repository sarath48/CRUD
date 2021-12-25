import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  baseURL:string='https://jsonplaceholder.typicode.com/';

  listUsers(){
    return this.httpClient.get(this.baseURL+'users');
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
}
