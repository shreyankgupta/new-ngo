import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from "../../shared/users";
/*
  Generated class for the SignupdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignupdbProvider {
  public url:string="http://localhost:3000/User";
  
  constructor(public http: HttpClient) {
    console.log('Hello SignupdbProvider Provider');
  }
  addUser(item)
  {
    let body=JSON.stringify(item);
  
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
