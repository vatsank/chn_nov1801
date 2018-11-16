import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  frmConfig = [
    {label: 'Name', type: 'text' ,  name: 'userName', constraint: Validators.required},
    {label: 'Pass Word', type: 'password' ,  name: 'passWord', constraint: Validators.required},
    {label: 'Phone Number', type: 'text' ,  name: 'phoneNumber', constraint: Validators.required},
    {label: 'email', type: 'email' ,  name: 'email', constraint: Validators.required},

];

constructor(private route: Router, private builder: FormBuilder) { }

regForm: FormGroup;

  ngOnInit() {

    this.regForm = this.builder.group({});

    this.frmConfig.forEach(eachControl => {

      this.regForm.addControl(eachControl.name,
            new FormControl('', [eachControl.constraint]));
    });

  }

  register(){

  }

}
