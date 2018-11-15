import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-show-hospital',
  templateUrl: './show-hospital.component.html',
  styleUrls: ['./show-hospital.component.css']
})
export class ShowHospitalComponent implements OnInit {

  @Input() location: string;
  @Output() hospitalList: EventEmitter<string[]> = new EventEmitter();

  list: Map<string, string[]> = new Map();

  constructor() {

    this.list.set('chennai', ['vijaya', 'appollo', 'cavery']);
    this.list.set('madurai', ['GH', 'aravind', 'lion', 'rotary']);
    this.list.set('bangalore',['GH', 'manipal', 'yasoda', 'vasavi']);
   }

  ngOnInit() {
  }

  sendHospitalList(){

    const foundList = this.list.get(this.location);


    if (foundList !== undefined) {
     this.hospitalList.emit(foundList);
    } else {
      this.hospitalList.emit(['error - No details found']);
    }
  }
}
