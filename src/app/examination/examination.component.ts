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
	  code:null,
	  brand:null,
	  co2flask:null,
	  approved:false
	};

  constructor() { }

  ngOnInit(): void {
    console.log('test');
  }

  setType(){
    console.log("type is set")
  }

  setItemCode(){

  } 

  setCustomer(){

  }

}
