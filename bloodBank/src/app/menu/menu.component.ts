import { ComponentInteractionService } from './../component-interaction.service';
import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() navLinks: Link[];

  showLogout = false;
  showLogin = true;

  constructor(private service: ComponentInteractionService) { }

  ngOnInit() {

    this.service.userStatus.subscribe(status => {

      if (status === 'logged') {
       this.showLogin = false;
       this.showLogout = true;
      }

      if (status === 'logout') {
        this.showLogin = true;
        this.showLogout = false;
       }

    });
  }

}
