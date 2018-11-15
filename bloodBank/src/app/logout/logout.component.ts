import { ComponentInteractionService } from './../component-interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ComponentInteractionService) { }

  ngOnInit() {
  }

  signOut() {

    this.service.changeUserStatus('logout');
  }
}
