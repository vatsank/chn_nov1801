import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-camps',
  templateUrl: './past-camps.component.html',
  styleUrls: ['./past-camps.component.css']
})
export class PastCampsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDetails(month: string, year: number): string[]{

    return ['Rotatry Club', 'Agni College', 'Agri College','SBI,Madipakkam'];

  }
}
