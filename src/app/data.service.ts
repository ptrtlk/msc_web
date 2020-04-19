import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  login:String;
  password:String;

  constructor(private http:Http) { }

  setCredentials(login:String,password:String){
    this.login = login;
    this.password = password;
  }

  getCustomer(){
    console.log("credentials" + this.login + " + " + this.password)

  }
}
