import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
//import { Observable, Observable } from 'rxjs';

export interface Customer {
  name:string
}

export interface Cat {
  name:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  login:String;
  password:String;
  prefix='http://localhost:8000/api/';

  constructor(private http:HttpClient) { }

  setCredentials(login:String,password:String){
    this.login = login;
    this.password = password;
  }

  getCustomer(name:string): Observable<Customer>{
    return this.http.get<Customer>(this.prefix + '/customer' + name)
  }

  getCat(name:string): Observable<Cat>{
    console.log('getting cat: ', name);
    return this.http.get<Cat>(this.prefix + '/cat' + name)
  }
}
