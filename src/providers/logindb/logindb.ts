import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from "../../shared/users";

/*
  Generated class for the LogindbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogindbProvider {

  public url:string="http://localhost:3000/login/";
  constructor(public http: HttpClient) {
    console.log('Hello LogindbProvider Provider');
  }

  login(item)
  {
    let body=JSON.stringify(item);
  
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
