import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-donar',
  templateUrl: './find-donar.component.html',
  styleUrls: ['./find-donar.component.css']
})
export class FindDonarComponent implements OnInit {

  isDisabled  = true;
  bloodGroup = 'opos';
  donarDetails: string;

  constructor() { }

  ngOnInit() {
  }

  change(){

    this.isDisabled = false;
  }

  find() {

     this.donarDetails = 'Ramesh - 949494949';

     if (this.bloodGroup === 'opos') {
       this.donarDetails = 'Suresh - 48484848';
     }

     this.isDisabled = true;
  }
}
