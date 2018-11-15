import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations = ['Chennai', 'Mumbai', 'Hyderbad', 'Pune', 'Bengalore', 'Trichy'];

  selected: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  ngOnInit() {
  }

  setValue(location){
         this.selected.next(location);
  }
}
