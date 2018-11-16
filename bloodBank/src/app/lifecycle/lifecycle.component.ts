import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit ,AfterViewInit {

  info = '';

  ngAfterViewInit(): void {
     alert('Life cylce after view init is called');
  }


  constructor() {

    alert('life cycle constructor called');
   }

  ngOnInit() {

    alert('life cycle init called');
  }

}
