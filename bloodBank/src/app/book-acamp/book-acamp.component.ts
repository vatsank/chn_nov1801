import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-acamp',
  templateUrl: './book-acamp.component.html',
  styleUrls: ['./book-acamp.component.css']
})
export class BookACampComponent implements OnInit {

  bookForm: FormGroup;
  frmConfig = [
    {label: 'Name', type: 'text' ,  name: 'name', constraint: Validators.required},
    {label: 'Organisation', type: 'org' ,  name: 'passWord', constraint: Validators.required},
    {label: 'Phone Number', type: 'text' ,  name: 'phoneNumber', constraint: Validators.required},
    {label: 'email', type: 'email' ,  name: 'email', constraint: Validators.required},
    {label: 'requiredDate', type: 'date' ,  name: 'reqdate', constraint: Validators.required},

];
constructor(private route: Router, private builder: FormBuilder) { }


  ngOnInit() {

    this.bookForm = this.builder.group({});

    this.frmConfig.forEach(eachControl => {

      this.bookForm.addControl(eachControl.name,
            new FormControl('', [eachControl.constraint]));
    });

  }

}
