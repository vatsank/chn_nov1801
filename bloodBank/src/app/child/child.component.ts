import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges {

   @Input() msg: string;

  constructor() {

    alert('CHILD CONSTRUCTOR CALLED');
   }

   ngOnChanges(change: SimpleChanges) {

    alert('CHILD ON CHANGE CALLED');

   }
  ngOnInit() {

    alert('CHILD ON INIT CALLED');
  }



}
