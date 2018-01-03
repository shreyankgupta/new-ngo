import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TopdonorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TopdonorsProvider {

  url:string="http://localhost:3000/User";
  constructor(public http: HttpClient) {
    console.log('Hello TopdonorsProvider Provider');
  }

  getTopDonors()
  {
     
  
    return this.http.get(this.url);
  }


}
