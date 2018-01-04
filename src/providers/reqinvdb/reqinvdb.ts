import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stuffcat } from "../../shared/stuffcat";

/*
  Generated class for the ReqinvdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReqinvdbProvider {
  public url:string="http://localhost:3000/Reqinv";
  public urlcat:string="http://localhost:3000/Inventory";
  

  constructor(public _http: HttpClient) {
    console.log('Hello ReqinvdbProvider Provider');
  }

  getjoinCat()
  {  
    return this._http.get(this.url);
  }
  getCat()
  {  
    return this._http.get<Stuffcat>(this.urlcat);
  }

}
