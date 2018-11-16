import { ComponentInteractionService } from './../component-interaction.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,  Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ComponentInteractionService, private builder: FormBuilder) { }

  loginForm: FormGroup;

  frmConfig = [
    {label: 'UserName', type: 'text' ,  name: 'userName', constraint: Validators.required},
    {label: 'PassWord', type: 'password' ,  name: 'passWord', constraint: Validators.required},

];

  ngOnInit() {

          this.loginForm = this.builder.group({});

          this.frmConfig.forEach(eachControl => {

            this.loginForm.addControl(eachControl.name,
                  new FormControl('', [eachControl.constraint]));
          });
  }

  signIn() {
    console.log('logged');

    const uname = this.loginForm.controls.userName.value;
    const pword =  this.loginForm.controls.passWord.value;

    if(uname === 'india' && pword==='india'){
           this.service.changeUserStatus('logged');
           sessionStorage.setItem('logged', 'yes');
    }


  }


}
