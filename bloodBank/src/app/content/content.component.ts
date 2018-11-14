import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentList: Content[];
  constructor() {

    this.contentList = [
      {image: 'assets/images/donar.png', description: 'Blood Donars' , count: 4500},
      {image: 'assets/images/request.png', description: 'Requests' , count: 2500},
      {image: 'assets/images/activeDonar.png', description: 'Active  Donars' , count: 1500}

    ];
   }

  ngOnInit() {
  }

}
