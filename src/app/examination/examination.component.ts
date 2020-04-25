import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  public customerForm: FormGroup;
  public itemForm: FormGroup;

  constructor(private _dataService:DataService) {
  }

  type = ''

  ngOnInit(): void {

    this.type = '';

    this.customerForm = new FormGroup({
      id: new FormControl(''),
      note: new FormControl(''),
    });

    this.itemForm = new FormGroup({
      code: new FormControl(0),
      brand: new FormControl(''),
      co2flask: new FormControl(0),
      approved: new FormControl(false)
    });

    this.itemForm.get('code').valueChanges.subscribe(((newValue: string) => {
      console.log('set item code');
    }));
  }

  clickFunction(){
    console.log('click')
    //this._dataService.setCredentials("abc","def");
  }

  setType(){
    console.log('settype')
    //this._dataService.getCustomer();
  }


}