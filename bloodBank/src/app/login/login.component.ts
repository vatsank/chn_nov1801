import { ComponentInteractionService } from './../component-interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ComponentInteractionService) { }

  ngOnInit() {
  }

  signIn() {
    console.log('logged');
    this.service.changeUserStatus('logged');
  }

}
