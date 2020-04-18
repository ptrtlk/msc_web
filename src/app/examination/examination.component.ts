import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  type:string;
  customer:{
	  id:string,
	  note:string
  };
  item:{
	  code:number,
	  brand:string,
	  co2flask:number,
	  approved:boolean
	};

  constructor() { }

  ngOnInit(): void {
    console.log("init ngoninit")
    this.type = "";
    this.customer.id = "";
    this.customer.note = "";
    this.item.code = 0;
    this.item.brand = "";
    this.item.co2flask = 0;
    this.item.approved = false;
  }

  setType(){
    console.log("type is set")
  }

  setItemCode(){

  } 

  setCustomer(){

  }

  clickFunction(){
    this.type = "abcdeftype"
  }

}
