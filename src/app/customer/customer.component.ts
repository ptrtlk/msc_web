import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerId:string;

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
  }

  getCustomers(){
    var res = this._dataService.getCustomers();
    console.log(JSON.stringify(res));
  }

  getCustomer(){
    var res = this._dataService.getCustomer(this.customerId);
    console.log(JSON.stringify(res));
  }

}
