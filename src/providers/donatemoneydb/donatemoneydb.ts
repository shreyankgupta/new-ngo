import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


/*
  Generated class for the DonatemoneydbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonatemoneydbProvider {

  public url:string="http://localhost:3000/Payment";

  constructor(public _http: HttpClient) {
    console.log('Hello DonatemoneydbProvider Provider');
  }

  addMoney(item)
  {
    console.log("service called");
    let body=JSON.stringify(item);
    console.log(item);
  
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
