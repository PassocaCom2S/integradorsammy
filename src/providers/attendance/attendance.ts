import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AttendanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AttendanceProvider {

  // URL externa, no caso do integrador será a url do nosso projeto no heroku!
  apiUrl = 'https://save-us.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello AttendanceProvider Provider');
  }

  //Retorna os atendimentos do heroku!
  getAttendance() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/calls.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
