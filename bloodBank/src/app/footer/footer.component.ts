import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  linkList: Link[];
  constructor() {

    this.linkList = [
      {linkRef: 'http://twitter.com', linkText: 'Twitter',
          style: 'fa  fa-twitter'},
      {linkRef: 'http://instagram.com', linkText: 'Instagram',
                  style: 'fa fa-instagram'},
      {linkRef: 'http://facebook.com', linkText: 'FaceBook',
             style: 'fa fa-facebook'}

  ];
   }

  ngOnInit() {
  }

}
