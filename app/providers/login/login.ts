import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Login {

  constructor(private http: Http) { }
  
  doLogin(username, password) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let url = `http://localhost:3000/login`;
      let body = { username: username, password: password };

      this.http.post(url, body, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data)
        }, err => reject(err));
    });
  }  

}

