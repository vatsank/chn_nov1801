import { LocationListComponent } from './../location-list/location-list.component';
import { ComponentAdderService } from './../component-adder.service';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-find-donar',
  templateUrl: './find-donar.component.html',
  styleUrls: ['./find-donar.component.css']
})
export class FindDonarComponent implements OnInit {

  isDisabled  = true;
  bloodGroup = 'opos';
  donarDetails: string;

  @ViewChild('locRef', {read: ViewContainerRef}) viewRef: ViewContainerRef;
  city = '';

  constructor(private service: ComponentAdderService) { }

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


  showLocation(){

       this.service.setViewRef(this.viewRef);
       const compRef = this.service.addComponent(LocationListComponent);

      const com = (<LocationListComponent>compRef);

      com.selected.subscribe(value => {
        this.city = value;

        if (this.city.length > 0) {
          this.service.removeComponent();
        }

      });

  }
}
