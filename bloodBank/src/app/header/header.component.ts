import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo: string;
  majHeading: string;
  show = true;

  pageLinks: Link[] = [
    {linkRef: 'home', linkText: 'Home'},
    {linkRef: 'request', linkText: 'Request Blood'},
    {linkRef: 'donar', linkText: 'View All Donars'},
    {linkRef: 'findDonar', linkText: 'Search Donar'},
    {linkRef: 'viewCamp', linkText: 'Donation Camps'},


  ];

   constructor() {

    this.logo = 'assets/images/logo.jpg';
    this.majHeading = 'Jeevan Blood Bank';
   }

  ngOnInit() {
  }

}
