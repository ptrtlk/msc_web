import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  catName:""

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
  }

  getCat(){
    var response = this._dataService.getCat(this.catName)
    console.log('response:',response)
  }


}
