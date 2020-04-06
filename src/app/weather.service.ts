import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '405cdff1e576bb2fad1a2bc5b525edca';
  url;

  constructor(private http:Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code){
    let url = this.url + city + ',' + code + '&APPID=' + this.apiKey;
    return this.http.get(url).pipe(
      map((res) => res.json())
    );
  }
}
