import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  // URL externa, no caso do integrador será a url do nosso projeto no heroku
  apiUrl = 'https://save-us.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  //Metodo GET para capturar dados do herokuapp
  getUser() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  //Metodo POST para enviar dados para o herokuapp
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users.json', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  addCall(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/calls.json',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
