import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlPrefix = 'http://localhost:3000';
  apiNodes = {
    addCustomer : '/addCustomer/:name/:location',
    getCustomer : '/getCustomers/:id',
    getCustomers : '/getCustomers',
    updateCustomer : '/updateCustomer/:id/:newName',
    deleteCustomer : '/deleteCustomer/:id'
  }

  constructor(private httpClient:HttpClient, private http:Http) {
    
  }

  addCustomer(name:string, location:string){
    let url = this.urlPrefix + this.apiNodes.addCustomer.replace(':name',name).replace(':location',location);
    let obj = {
        name:name,
        location:location
      };
    this.http.post(url, obj).pipe(
      map((res) => res.json())
    );
  }

  getCustomers(){
    let url = this.urlPrefix + this.apiNodes.getCustomers;
  /*  let returnvalue = this.httpClient.get(url);
    return returnvalue;*/
    return this.http.get(url).pipe(
      map(
        (res) => res.json()
      )
    );
  }

  getCustomer(id:string){
    let url = this.urlPrefix + this.apiNodes.getCustomer.replace(':id', id);
    url = 'http://api.openweathermap.org/data/2.5/weather?q=Portland&appid=405cdff1e576bb2fad1a2bc5b525edca';
    return this.http.get(url).pipe(
      map((res) => res.json())
    );
  }

  /*
  getWeather(city, code){
    let url = this.url + city + ',' + code + '&APPID=' + this.apiKey;
    return this.http.get(url).pipe(
      map((res) => res.json())
    );
  }
  */
}

/*
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
*/