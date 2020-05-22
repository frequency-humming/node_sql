import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  secondClick(){
    console.log('I am in service component')
  }
  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }

  sendName(data){
    return this.http.post('http://localhost:3000/test', data)
  }

  getInfo(){
    return this.http.get('http://localhost:3000/gethouses')
  }

}
