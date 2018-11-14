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

  pageLinks: Link[] = [
    {linkRef: 'searchDonar', linkText: 'Search Donar'},
    {linkRef: 'requestBlood', linkText: 'Request Blood'},
    {linkRef: 'history', linkText: 'Donation History'},
    {linkRef: 'donationCamps', linkText: 'View Camps'},

  ];
  constructor() {

    this.logo = 'assets/images/logo.jpg';
    this.majHeading = 'Jeevan Blood Bank';
   }

  ngOnInit() {
  }

}
