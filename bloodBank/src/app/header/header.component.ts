import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo: string;
  majHeading: string;
  constructor() {

    this.logo = 'assets/images/logo.jpg';
    this.majHeading = 'Jeevan Blood Bank';
   }

  ngOnInit() {
  }

}
