import { ComponentInteractionService } from './component-interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome to bloodBank!';
  show = true;

  constructor(private service: ComponentInteractionService){}
  ngOnInit(){
   this.service.userStatus.subscribe(resp => {
     if(resp === 'HideHeading'){
       this.show = false;
     }
   })
  }
}
