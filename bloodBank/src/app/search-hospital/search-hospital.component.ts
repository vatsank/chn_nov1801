import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent implements OnInit {
  list: string[];
  city = '';
  constructor() { }

  ngOnInit() {
  }

  onChange(val): void{

    this.list = val;
  }
}
